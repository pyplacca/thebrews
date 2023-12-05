<template>
  <div class="min-h-screen flex flex-col">
    <main class="flex-grow flex flex-col">
      <RouterView />
    </main>
    <footer>
      <Link to="/">
        <img src="@/assets/logo.png" alt="logo" width="35" height="50" />
      </Link>
      <span class="font-serif text-xl">Wilson & Eyra</span>
      <div class="md:ml-auto opacity-[0.75]">thebrews.codesworth.io 2023</div>
      <div class="flex gap-y-4 gap-x-6">
        <a :href="paystack.paymentLink" target="blank"> REGISTRY </a>
        <Link to="/rsvp">RSVP</Link>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink as Link, RouterView, useRoute } from "vue-router";
import { watch, inject } from "vue";

const route = useRoute();
const paystack = inject("paystack");

watch(route, () => {
  if (route.hash) {
    const el = document.querySelector(route.hash);
    if (el) {
      window.scroll(0, el.offsetTop);
      return;
    }
  }
  window.scrollTo(0, 0);
});
</script>
