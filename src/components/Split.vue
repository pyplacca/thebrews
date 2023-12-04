<template>
  <section
    class="bg-white flex flex-col md:grid md:grid-cols-2 md:min-h-screen md:max-h-[48rem]"
  >
    <div class="s1 overflow-hidden">
      <img
        v-bind="image"
        loading="lazy"
        class="h-full w-full object-cover"
        :class="{ 'col-start-2': alignment === 'right' }"
      />
    </div>
    <div
      class="s2 container py-20 justify-center flex flex-col"
      :class="{
        'items-end col-start-1 row-start-1': alignment === 'right',
      }"
    >
      <h2 :data-title="title" :data-align="alignment" class="mb-10">
        {{ title }}
      </h2>
      <p
        class="max-w-md leading-7 mb-12"
        :class="{ 'text-right': alignment === 'right' }"
      >
        <slot name="paragraph">
          <span class="font-bold">
            {{ leadParagraph }}
          </span>
          {{ paragraph }}
        </slot>
      </p>
      <slot name="button"></slot>
    </div>
  </section>
</template>
<script setup>
import { ref, reactive } from "vue";
import { useIntersectionObserver } from "@/composables";

defineProps({
  alignment: {
    type: String,
    default: "left",
    validation(arg) {
      return ["right", "left"].includes(arg);
    },
  },
  title: {
    type: String,
    default: "",
  },
  leadParagraph: {
    type: String,
    default: "",
  },
  paragraph: {
    type: String,
    default: "",
  },
  image: {
    type: Object,
    default: () => ({}),
  },
});

// const a = ref(null)
// const b = ref(null)

// const entered = reactive({
// 	a: false,
// 	b: false
// })

// useIntersectionObserver([a], ([{ isIntersecting }]) => {
// 	entered.a = isIntersecting
// })
// useIntersectionObserver([b], ([{ isIntersecting }]) => {
// 	entered.b = isIntersecting
// })
</script>
