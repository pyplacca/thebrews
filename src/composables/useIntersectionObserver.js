import { ref, isRef, onMounted, onBeforeUnmount } from 'vue'

export default function(targets, callback, options) {
	const observer = ref(null)
  let elements = []

	onMounted(() => {
    targets.forEach(item => {
      let el = item
      if (typeof item === 'string') {
        el = document.querySelector(item)
      } else if (isRef(item)) {
        el = item.value
      }
      elements.push(el)
    })

		observer.value = new IntersectionObserver(callback, {
			threshold: [0.5, 1],
			...options,
		})

    elements.forEach(el => observer.value.observe(el))
	})

	onBeforeUnmount(() => {
    elements.forEach(el => observer.value.unobserve(el))
	})

	return {
		observer
	}
}
