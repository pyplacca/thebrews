<template>
  <div class="container py-12">
    <PageCloseButton />
    <!--  -->
    <h1 class="text-center text-black font-serif text-6xl">Our Story</h1>
    <div ref="banner" class="page-banner h-96 my-12">
      <img
        src="@/assets/images/story/banner.jpg"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="max-w-4xl mx-auto text-grey-dark">
      <p class="my-28 leading-7 text-center">
        Our paths first crossed when Wilson joined the Cedar Protocol Team
        several years ago. The initial encounter occurred during a national
        assignment at the Pentecost Retreat Centre in Weija in March 2020. On
        that assignment, I observed that the gentleman who struck me as an
        introvert had an interesting personality. After the event, Wilson and I
        stood side by side for a group photograph. As destiny would have it,
        that wouldn't be the last. Every other group photograph taken during
        other team activities saw us standing close to each other. Little did we
        know that these seemingly ordinary moments would set the stage for a
        journey filled with surprises and genuine connection. In fact, what
        commenced as a simple acquaintanceship blossomed into something profound
        and transcended the ordinary.
      </p>
    </div>
    <div class="flex items-start gap-x-24 text-grey-dark relative">
      <div>
        <p class="py-5">
          In the course of our friendship, Wilson insisted on teaching me the
          game of chess, promising it would offer valuable insights into life
          and relationships. He also stumbled upon how I had saved his name on
          my phone, leading to a light-hearted exchange. As time progressed,
          Wilson affectionately began referring to me as "Empress" from January
          to April 2021, a term I initially opposed.
        </p>
        <div class="flex items-start gap-8 max-w-md">
          <p>
            His persistence, coupled with expressions of his deep feelings,
            culminated in a heartfelt proposal during one of our date nights. He
            said “What I feel for you is unusual, they are feelings I have never
            felt for anyone before. I want to marry you”. <br /><br />

            Touched by his sincerity, I sought time to pray about the decision,
            during which Wilson appeared in my dreams consistently whenever I
            raised a prayer about his proposal. In the process of waiting for an
            answer, he remarked one day “I know it is only Rev Wengam who can
            change your mind, so I would talk to Rev Wengam about my interest in
            you”. I was skeptical he could talk to Rev Stephen Wengam but to my
            dismay, he manned up and made his intentions about me known to Rev.
            Wengam. This bold move convinced me to say YES. After months of
            courtship, we find ourselves on the path to our Happily Ever After.
          </p>
          <img
            src="@/assets/images/story/3.1.jpg"
            class="w-80 h-auto object-contain absolute bottom-10 right-64"
          />
        </div>
      </div>
      <img
        src="@/assets/images/story/3.2.jpg"
        class="w-4/12 h-full object-contain float-right"
      />
    </div>
  </div>
</template>
<script setup>
import PageCloseButton from "@/components/page-close-button.vue";
</script>
