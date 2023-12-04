<style>
	.popup {
		background-color: rgb(0,0,0, .8);
		height: 100vh;
		padding: 1rem;
		position: fixed;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		animation: fade .3s ease-out 2s forwards;
	}

	.popup > div {
		background-color: #FFFDF4;
		max-height: 90vh;
		overflow: auto;
	}

	@keyframes fade {
		to {
			opacity: 1;
		}
	}
</style>
<template>
	<div class="popup">
		<div class="flex flex-col p-6 md:px-8 relative">
			<button
				class="close-btn sticky top-0 mb-8 mx-auto flex-shrink-0"
				@click="$emit('close')"
			>
				<TimesIcon width="10"/>
			</button>
			<div class="max-w-lg">
				<h3 class="text-2xl font-bold mb-6 text-center">COPYRIGHT NOTICE</h3>
				<p class="font-semibold">
					You are required to have ‘prior permission’ to use, borrow or display ANY photograph for any commercial purpose.
				</p>
				<br>
				<p>
					Copyright statement – Our photographs are not licensed for gain, commercial or public use or use in the public domain. Requests for usage of copyrighted materials should in the first instance be submitted to Codesworth (A Fee will apply). To be used, the following will apply
					<ul class="ml-4 mt-2">
						<li class="list-disc">
							First, a request to; and a written reply from Codesworth giving permission to use the requested items.
						</li>
						<li class="list-disc">
							Second, credit and acknowledgement to Codesworth on each of the items used (This must include our company name, our contact telephone number and or our web address).
						</li>
					</ul>
					<br>
					Codesworth asserts their moral, commercial and intellectual rights to be known as the author of the works produced. All rights reserved.
					<br><br>
					All the photographs and images on this site are copyright. All original photographs on this web site are copyright Codesworth © 2022.
					<br><br>
					Any rights not expressly granted herein are reserved. Note: We vigorously pursue unauthorised use of our copyrighted materials.
					Your Rights To The Images and License to Use
					You may not sell the image files or prints produced from the files whether in original form, or after any amount of alteration. No persons may use the image files as a basis for the creation of any artworks if that artwork is to be used for any commercial purpose. No rights to these images may be transferred to any other person or company, whether for profit, or as a gift. The images may not be displayed or printed in any commercial media, for any purpose whatsoever, without written permission from the photographer. If you have a question about any specific usage, please contact us to ask for clarification or permission before proceeding with such use.
					<br><br>
					In respect of Commercial / Event work, the license and images are agreed prior to assignment.
				</p>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { defineEmits } from 'vue'

	import TimesIcon from '@/components/icons/times.vue'

	defineEmits(['close'])
</script>
