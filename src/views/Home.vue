<style scoped>
section#intro {
  background-image: url("@/assets/images/intro.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

section#story {
  background-image: url("@/assets/images/bg-gallery-grid.png");
  background-color: #0c0800;
  background-size: auto 110%;
  /*background-repeat: no-repeat;*/
  animation: slide 10s linear 0s alternate infinite;
  animation-play-state: paused;
  /*transition: background-position 10s linear;
		background-position: 110% 110%;*/
}

section#story.play {
  animation-play-state: running;
  /*background-position: 0% 0%;*/
}

section#connection {
  background-image: linear-gradient(to top, rgb(0, 0, 0, 0.6) 20%, transparent),
    url("@/assets/images/story.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.gallery-preview {
  --rows-count: 13;
  --row-size: 3rem;
  --gap: 1.5rem;
  /*display: grid;*/
  grid-template-columns: 1fr 1fr;
  grid-column-gap: var(--gap);
  max-height: calc(var(--row-size) * (var(--rows-count) - 2) + var(--gap));
  overflow-y: hidden;
}
.gallery-preview img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: left;
}

.preview-column {
  display: grid;
  grid-row-gap: var(--gap);
  grid-template-rows: repeat(var(--rows-count), var(--row-size));
  --to: calc(
    var(--child-count) * var(--row-size) * -8 -
      (var(--gap) * var(--child-count) / 2)
  );
  animation: slide2 var(--duration) linear 0s alternate infinite;
  animation-play-state: paused;
}

.preview-column:nth-child(1) > *:nth-child(odd) {
  grid-row: span 6;
}
.preview-column:nth-child(1) > *:nth-child(even) {
  grid-row: span 7;
}
.preview-column:nth-child(2) > *:nth-child(odd) {
  grid-row: span 7;
}
.preview-column:nth-child(2) > *:nth-child(even) {
  grid-row: span 6;
}

.gallery-preview .preview-column:nth-child(1) {
  --duration: calc(var(--child-count) * 6s);
}
.gallery-preview .preview-column:nth-child(2) {
  --duration: calc(var(--child-count) * 7s);
}

.gallery-preview.slideshow .preview-column {
  animation-play-state: running;
}

@media screen and (max-width: 700px) {
  section#story {
    animation-duration: 25s;
  }
}

@keyframes slide {
  from {
    background-position: 105% 105%;
  }
  to {
    background-position: 0% 0%;
  }
}

@keyframes slide2 {
  to {
    transform: translateY(var(--to));
  }
}
</style>

<template>
  <div data-value="16 . 12 . 23" class="date">16 . 12 . 23</div>
  <Header />
  <section id="intro" class="h-screen bg-[-12rem_bottom] md:bg-center">
    <div
      class="h-full container flex flex-col items-end justify-end text-white py-12"
    >
      <div class="font-serif text-6xl text-right mb-6">
        Wilson Brew <br />
        & Eyra Doe
      </div>
      <p class="uppercase text-lg text-right tracking-widest mb-6">
        REQUEST THE HONOUR OF YOUR <br />
        PRESENCE AT THE COMMENCEMENT <br />
        OF OUR HAPPILY EVER AFTER
      </p>
      <Link to="#rsvp" class="action-btn down">
        <RSVPDownIcon width="120" />
      </Link>
    </div>
  </section>

  <!-- story -->
  <section ref="story" id="story" class="min-h-screen flex">
    <div class="container flex flex-col gap-y-10 py-20 text-white my-auto">
      <p class="max-w-md text-right text-lg lg:mr-40 ml-auto leading-7">
        <span class="font-medium">
          “Now faith is the assurance of things hoped for, the conviction of
          things not seen.” — Hebrews 11:1
        </span>
        <br />
        <span class="text-grey-2">
          In the realm of love, every story is deemed beautiful, but for us,
          Wilson Brew and Eyra Doe, ours stands as a cherished favorite. It's a
          tale of faith triumphing over fear because every step of our journey
          has unfolded through prayers and steadfast faith rather than fear.
        </span>
      </p>
      <div class="text-5xl font-serif lg:ml-40">
        Wilson & <br />
        Eyra
      </div>
    </div>
  </section>

  <!--  -->
  <section id="connection">
    <blockquote class="container max-w-screen-md py-36 text-white">
      <div class="text-6xl mb-8 font-serif">
        I believe that every <br />
        single event
      </div>
      <p class="text-right text-3xl max-w-sm ml-auto">
        in life happens is an opportunity to choose love over fear
      </p>
      <cite class="block font-serif not-italic text-2xl w-fit ml-auto mt-2">
        - Oprah Winfrey
      </cite>
    </blockquote>
  </section>

  <!-- rsvp -->
  <Split
    id="rsvp"
    :image="{
      src: rsvp,
      alt: 'Shadrach and Florence casually holding hands',
    }"
    title="Rsvp"
  >
    <template #paragraph>
      <span class="font-semibold">
        “Faith is taking the first step even when you don't see the whole
        staircase.” — Martin Luther King, Jr.
      </span>
      <br />
      <span class="text-grey-dark">
        We can't wait to celebrate with you! <br />
        Are you in or what?! <br />
        Please let us know by 10th December, 2023
      </span>
    </template>
    <template #button>
      <button
        class="action-btn text-black w-fit"
        @click="$router.push('/rsvp')"
      >
        <RSVPIcon width="150" color="currentColor" />
      </button>
    </template>
  </Split>

  <!-- registry -->
  <Split
    id="registry"
    :image="{ src: registry, alt: '' }"
    title="Registry"
    alignment="right"
  >
    <template #paragraph>
      <span class="font-semibold">
        We have come this far with God as the third wheel.
      </span>
      <br />
      <span class="text-grey-dark">
        We appreciate your time, prayers and presence at our marriage. We do not
        need homely gifts (a dinner set, a vase, or a bowl). We would appreciate
        a financial contribution or a Cash Voucher from any of these
        Supermarkets (Max Mart, Koala Shopping Center, Orca Décor, Melcom). This
        would make our wedding experience whole. We would also need a holiday
        when all is said and done. So, if you would like to give a gift and send
        us on our way, a donation to our honeymoon would really make our day!
      </span>
    </template>
    <template #button>
      <a
        :href="paystack.paymentLink"
        target="blank"
        class="action-btn w-fit text-black"
      >
        <VisitRegistryIcon width="130" color="currentColor" />
      </a>
    </template>
  </Split>

  <!-- gallery -->
  <section
    id="gallery"
    class="container py-12 grid lg:grid-cols-2 grid-rows-[min-content]"
  >
    <div class="py-16 lg:pl-12 lg:pr-24 flex flex-col items-end">
      <h2
        data-title="Gallery"
        data-align="right"
        class="mb-10 w-fit text-right"
      >
        Memories to keep <br />
        forever
      </h2>
      <p class="max-w-md text-right leading-7 text-grey-dark mb-12">
        We've created this website as a convenient and interactive way to share
        all of the details leading up to our wedding and our favourite memories
        with you. Take a look around and don't forget to check back after the
        wedding for more photos. We are so excited to share this day with you
        and look forward to dancing with all of our favourite people!
        <!-- <span class="font-semibold">
          Something about photos being available here after the event.
        </span>
        <span class="text-grey-dark">
          We have most things we need for life and love. If you want to bless us
          with a gift, we can always use cash gifts as we move to our new place.
        </span> -->
      </p>
      <button
        class="action-btn"
        @click="$router.push('/album?category=prewedding')"
      >
        <ViewAlbumIcon width="120" />
      </button>
    </div>
    <div ref="gallery" class="gallery-preview hidden lg:grid -ml-8">
      <div class="preview-column" style="--child-count: 6">
        <div>
          <img src="@/assets/images/gallery/1.jpg" alt="" />
        </div>
        <div>
          <img src="@/assets/images/gallery/3.jpg" alt="" />
        </div>
        <div>
          <img src="@/assets/images/gallery/5.jpg" alt="" />
        </div>
        <div>
          <img src="@/assets/images/gallery/7.jpg" alt="" />
        </div>
        <div>
          <img src="@/assets/images/gallery/9.jpg" alt="" />
        </div>
        <div>
          <img src="@/assets/images/gallery/11.jpg" alt="" />
        </div>
      </div>
      <div class="preview-column" style="--child-count: 5">
        <div>
          <img src="@/assets/images/gallery/2.jpg" alt="" />
        </div>
        <div>
          <img src="@/assets/images/gallery/4.jpg" alt="" />
        </div>
        <div>
          <img src="@/assets/images/gallery/6.jpg" alt="" />
        </div>
        <div>
          <img src="@/assets/images/gallery/8.jpg" alt="" />
        </div>
        <div>
          <img src="@/assets/images/gallery/10.jpg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink as Link, useRouter } from "vue-router";
import { ref, inject } from "vue";

import { useIntersectionObserver } from "@/composables";

import Header from "@/components/Header.vue";
import Split from "@/components/Split.vue";
import RSVPDownIcon from "@/components/icons/rsvp-down.vue";
import RSVPIcon from "@/components/icons/rsvp.vue";
import VisitRegistryIcon from "@/components/icons/visit-registry.vue";
import ViewAlbumIcon from "@/components/icons/view-album.vue";

import rsvp from "@/assets/images/rsvp.jpg";
import registry from "@/assets/images/registry.jpg";

const paystack = inject("paystack");

const story = ref(null);
const gallery = ref(null);

useIntersectionObserver([story], ([{ isIntersecting }]) => {
  if (isIntersecting) {
    story.value.classList.add("play");
  } else {
    story.value.classList.remove("play");
  }
});
useIntersectionObserver([gallery], ([{ isIntersecting }]) => {
  if (isIntersecting) {
    gallery.value.classList.add("slideshow");
  } else {
    gallery.value.classList.remove("slideshow");
  }
});
</script>
