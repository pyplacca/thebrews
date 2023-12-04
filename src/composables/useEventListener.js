import { onMounted, onBeforeUnmount } from 'vue'

export default function(target, event, callback) {
	onMounted(() => {
		target.value.addEventListener(event, callback)
	})

	onBeforeUnmount(() => {
		target.value.removeEventListener(event, callback)
	})
}
