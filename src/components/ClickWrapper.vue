<template>
	<component :is="el" ref="wrapper">
		<slot></slot>
	</component>
</template>
<script setup>
	import { ref, onMounted, onBeforeUnmount } from 'vue'
	
	defineProps({
		el: {
			type: String,
			default: 'div',
		}
	})

	const emit = defineEmits(['close'])
	const wrapper = ref(null)
	
	onMounted(() => {
		document.body.addEventListener('click', handleClick)
	})
	
	onBeforeUnmount(() => {
		document.body.removeEventListener('click', handleClick)
	})

	function handleClick(ev) {
		if (!wrapper.value.contains(ev.target)) {
			emit('close')
		}
	}
</script>
