<template>
	<svg viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M1 16H12M1.61111 7.52174L6.5 12.087L11.3889 7.52174M6.5 1V12.087" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
</template>

<script setup>
	defineProps({
		color: {
			type: String,
			default: 'white',
		},
	})
</script>
