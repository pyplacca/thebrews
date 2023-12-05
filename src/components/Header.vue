<template>
  <header
    class="flex items-center"
    :class="{ hide: scroll.hide, alt: scroll.amount > 50 }"
  >
    <img
      src="@/assets/logo.png"
      alt="logo"
      width="70"
      height="46"
      class="mx-auto md:ml-0"
    />
    <nav class="ml-auto hidden md:block">
      <ul>
        <Link to="/#registry">REGISTRY</Link>
        <Link to="/rsvp">RSVP</Link>
        <Link to="/story">OUR STORY</Link>
        <Link to="/album?category=prewedding">PHOTO ALBUM</Link>
      </ul>
    </nav>
  </header>
</template>
<script setup>
import { reactive, onMounted, onBeforeUnmount } from "vue";
import { RouterLink as Link } from "vue-router";

const scroll = reactive({
  amount: 0,
  hide: false,
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

function handleScroll() {
  scroll.hide = window.scrollY > scroll.amount;
  scroll.amount = window.scrollY;
}
</script>
