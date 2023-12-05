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
      <p class="py-20 mt-14 leading-7 text-center">
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
      <div
        class="grid lg:grid-cols-[1fr_4rem_1fr] text-gray-dark py-20 gap-6 isolate"
      >
        <p class="leading-7">
          <span class="text-black font-semibold">
            Fast forward to March 12, 2020 </span
          >, a significant day as I graduated with a Master of Communications.
          Wilson, among the many well-wishers, reached out with congratulations.
          Subsequent interactions, including a conversation sparked by his
          sister's birthday celebration in April of the same year, gradually
          deepened our connection. Wilson asked if I was born in April and I
          responded in the affirmative. He then replied, “I'm not surprised
          because you have got Beauty and Confidence.” Our conversations
          lengthened and evolved and touched on diverse topics despite the
          challenging year (COVID-19) we were all facing.
        </p>
        <img
          src="@/assets/images/story/1.1.jpg"
          alt=""
          class="w-full col-span-2 row-start-1 lg:row-start-auto"
        />
        <img
          src="@/assets/images/story/1.2.jpg"
          alt=""
          class="w-full col-span-2 lg:-mt-12 lg:z-[-1]"
        />
        <p class="leading-7">
          The turning point came when Wilson found out I was learning how to
          bake. In his sweet melodious voice, he asked a favor: “I like cakes,
          when will you bake me a cake?”. This request prompted me to inquire
          about his birthdate. Little did he know that on his birthday, a
          promise would be fulfilled as I presented him with a personally baked
          and decorated cake. This act of kindness became a pivotal moment,
          strengthening the bond that was developing between us. <br /><br />

          Our friendship continued to blossom as we found ourselves standing
          close to each other posing for pictures once again in October 2020.
          Wilson requested to take a picture with me. I jokingly responded in
          the affirmative and said “On the condition that you post the picture
          on your status on WhatsApp”.
        </p>
      </div>
    </div>
    <!-- section -->
    <div class="grid lg:grid-cols-[300px_50px_1fr] gap-8 py-20 text-grey-dark">
      <img
        src="@/assets/images/story/2.1.png"
        alt=""
        class="w-full lg:col-span-2"
      />
      <p class="leading-7">
        This playful condition set by me led to a posted picture on Wilson's
        WhatsApp status, sparking reactions and inquiries from curious viewers.
        He reported to me how many people were lambasting him and asking him for
        explanations with others asking him if it is a save-the-date picture.
        From then on, Wilson became a consistent presence, regularly engaging in
        conversations and expressing admiration for my baking skills.
      </p>
      <div
        class="lg:col-start-2 lg:col-span-3 grid lg:grid-cols-[370px_1fr] lg:-mt-[22rem] gap-8"
      >
        <img src="@/assets/images/story/2.2.png" alt="" class="w-full" />
        <p class="leading-7">
          However, I had set a protective shield by expressing my reservations
          about relationships with guys from the same church. In my estimation,
          this will prevent Wilson from having any amorous feelings towards me.
          <br />
          As to whether this worked, your guess is as good as mine. <br /><br />

          Despite my attempts to safeguard against romantic feelings, our
          friendship deepened when we were paired for Protocol duties as
          Officers in Charge of the service in November 2020. As fate would have
          it, my car broke down leaving Wilson to pick me up to church and back.
          <br /><br />

          From 2020 to the latter part of 2022 our journey of friendship was
          firmed up as we spent time chatting and going on date nights. Through
          challenges, laughter, and shared moments, Wilson became more than a
          friend.
        </p>
      </div>
    </div>
    <!--  -->
    <!-- <div class="flex items-start gap-x-24 text-grey-dark relative py-20">
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
    </div> -->
  </div>
</template>
<script setup>
import PageCloseButton from "@/components/page-close-button.vue";
</script>
