<template>
  <div class="sticky top-4 mb-8 w-fit mx-auto z-10">
    <button class="close-btn" @click="$router.push('/')">
      <TimesIcon width="10" />
    </button>
  </div>
</template>
<script setup>
import TimesIcon from "@/components/icons/times.vue";
</script>
