<style scoped>
	[data-title]:before {
		top: auto;
		right: -3rem;
		white-space: nowrap;
	}

	.view-image .skeleton,
	.view-image img {
		width: min(85vw, 100vw);
		height: min(100vw, 80vh);
		object-fit: scale-down;
		max-width: auto;
	}
</style>
<template>
	<div class="container my-auto min-h-screen">
		<PageCloseButton/>
		<nav class="overflow-x-auto">
			<ul class="grid grid-flow-col justify-center p-4 text-grey-light gap-x-4 no-scrollbar">
				<li v-for="item in tabs" class="flex-shrink-0">
					<Link
						:to="`/album?category=${item.id}`"
						class="uppercase whitespace-nowrap"
						:class="{ 'text-black font-medium': route.query.category === item.id }"
					>
						{{ item.name }}
					</Link>
				</li>
			</ul>
		</nav>
		<!--  -->
		<div class="hidden p-6 fixed top-0 left-0 bottom-0 lg:flex justify-center">
			<h1
				data-title="PHOTO ALBUM"
				data-align="center"
				class="text-center text-grey-light"
				style="writing-mode: tb;"
			>
				Memories to keep forever
			</h1>
		</div>
		<!--  -->
		<div
			v-if="!(state.albums[route.query.category] || []).length && !state.loading"
			class="mt-20 flex flex-col items-center"
		>
			<img src="/favicon.png" alt="logo" width="70" height="100">
			<p class="text-grey text-lg text-center mt-8">
				Sorry, there are no images available
			</p>
		</div>
		<!--  -->
		<div v-else class="p-6 lg:pl-28 album grid md:col2-masonry lg:col3-masonry gap-6">
			<img
				v-for="({ url, name }) in (state.albums[route.query.category] || [])"
			  :src="url"
			  loading="lazy"
				class="md:c2-album-image lg:c3-album-image w-full h-full object-cover cursor-pointer"
				@click="viewHDImage(name)"
			/>
			<div
				v-if="state.loading"
				v-for="i in 6"
				:key="i"
				class="bg-grey-light/30 animate-pulse md:c2-album-image lg:c3-album-image"
			></div>
		</div>
		<div ref="scrollTrigger" class="py-6"></div>

		<!-- image preview -->
		<div
			v-if="state.view.url || state.fetchingHD"
			class="view-image bg-black/80 fixed inset-0 flex"
		>
			<div class="h-fit m-auto">
				<div class="flex justify-end p-3 gap-3">
					<a
						:href="state.view.url"
						target="black"
						class="bg-black/30 rounded-full w-[45px] h-[45px] grid place-items-center"
					>
						<DownloadIcon width="12"/>
					</a>
					<button
						class="bg-black/30 rounded-full w-[45px] h-[45px] grid place-items-center"
						@click="state.view = {}"
					>
						<TimesIcon width="12"/>
					</button>
				</div>
				<div
					v-if="state.fetchingHD"
					class="skeleton bg-grey-light/30 animate-pulse"
				></div>
				<img v-else :src="state.view.url" class="m-auto">
			</div>
		</div>
		<Disclaimer v-if="state.showDisclaimer" @close="state.showDisclaimer = false"/>
	</div>
</template>
<script setup>
	import { reactive, onMounted, watch, ref } from 'vue'
	import { RouterLink as Link, useRoute } from 'vue-router'
	import { getStorage, ref as storeRef, list, getDownloadURL } from "firebase/storage";
	import { useIntersectionObserver } from '@/composables'

	import Disclaimer from '@/components/Disclaimer.vue'

	import PageCloseButton from '@/components/page-close-button.vue'
	import TimesIcon from '@/components/icons/times.vue'
	import DownloadIcon from '@/components/icons/download.vue'

	const tabs = [
		{ name: 'Pre-Wedding', id: 'prewedding' },
		{ name: 'Traditional', id: 'traditional' },
		{ name: 'Cocktail', id: 'cocktail' },
		{ name: 'Reception', id: 'reception' },
		{ name: 'Videos', id: 'videos' }
	]

	const state = reactive({
		showDisclaimer: false,
		loading: false,
		fetchingHD: false,
		albums: {},
		next: {},
		view: {},
		memo: {},
	})
	const scrollTrigger = ref(null)

	const route = useRoute()

	useIntersectionObserver([scrollTrigger], ([e]) => {
		const { category } = route.query
		const token = state.next[category]
		if (e.isIntersecting && !state.loading && token) {
			fetchImages(category, token)
		}
	})

	onMounted(() => {
		getMediaFiles()
		state.showDisclaimer = true
	})

	watch(() => route.query, getMediaFiles)

	function getMediaFiles() {
		const { category } = route.query
		if (!category || state.albums[category]?.length) return
		fetchImages(category)
	}

	async function fetchImages(category, token) {
		const listRef = storeRef(getStorage(), category);

		try {
			state.loading = true
			const album = await list(listRef, {
				maxResults: 6,
				...(token ? { pageToken: token } : {})
			})

			if (album.items.length) {
				state.albums[category] = state.albums[category] || []
				for (let ref of album.items) {
					state.albums[category].push({
						url: await getDownloadURL(ref),
						name: ref.name
					})
				}
			}

			state.next[category] = album.nextPageToken
		} finally {
			state.loading = false
		}
	}

	async function viewHDImage(name) {
		state.fetchingHD = true
		const path = `${route.query.category}-full/${name}`
		let image = state.memo[path]
		if (!image) {
			image = await getDownloadURL(storeRef(getStorage(), path))
			state.memo[path] = image
		}
		state.fetchingHD = false
		state.view.url = image
		state.view.name = name
	}
</script>
