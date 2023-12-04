<template>
  <div class="container py-12">
    <PageCloseButton />
    <!--  -->
    <h1 class="text-center text-black font-serif text-6xl">Rsvp</h1>
    <div ref="banner" class="rsvp-banner h-96 my-12">
      <img :src="images[index]" class="w-full h-full object-cover" />
    </div>
    <div class="py-12 max-w-4xl mx-auto">
      <div
        data-title="rsvp"
        data-align="center"
        class="text-center text-grey-dark mt-12 mb-20"
      >
        Please confirm your attendance
      </div>
      <div class="grid md:grid-cols-2 gap-20">
        <div>
          <p class="max-w-md text-grey leading-7">
            We can't wait to celebrate with you! <br />
            Are you in or what?! <br />
            Please let us know by 10th December, 2023
          </p>
        </div>
        <form class="mb-16" @submit.prevent="confirmAttendance">
          <!-- name -->
          <!-- <ClickWrapper
            class="form-group mb-6 relative"
            @close="state.focused = false"
          >
            <label for="name"
              >Enter your first name to select from the list</label
            >
            <input
              v-model="state.form.name"
              type="text"
              :placeholder="state.form.placeholder"
              class="placeholder-grey"
              @focus="state.focused = true"
            />
            <ul
              v-show="showList"
              class="absolute top-full mt-1 rounded-md w-full bg-white pl-2 pr-4 py-1 z-10 max-h-80 overflow-y-auto"
            >
              <li v-if="state.fetching">
                <Loader color="#8E4585" class="mx-auto my-4" />
              </li>
              <li
                v-for="person in state.invitees"
                :key="person.id"
                v-else
                class="text-grey px-4 py-2 my-1 rounded-md cursor-default"
                :class="[
                  person.id === state.form.invitee.id
                    ? 'bg-grey-light/30'
                    : 'hover:bg-[#DFDCCF]',
                ]"
                @click="selectInvitee(person)"
              >
                {{ person.name }}
              </li>
            </ul>
          </ClickWrapper> -->
          <!-- slots -->
          <div class="form-group mb-6">
            <label for="invitee">
              Enter your first name to select from the list
            </label>
            <input
              v-model="state.form.invitee"
              name="invitee"
              placeholder="Enter your name"
              class="placeholder-grey"
            />
          </div>
          <div class="form-group mb-6">
            <label for="slots">Number of people admitted by invite</label>
            <input
              v-model="state.form.slots"
              name="slots"
              type="number"
              placeholder="1"
              class="placeholder-grey"
            />
          </div>
          <button
            :disabled="disabled"
            class="text-white font-medium px-8 py-4 rounded-full w-full bg-primary disabled:bg-primary/50 mt-12"
          >
            <Loader v-if="state.loading" color="white" class="mx-auto my-1.5" />
            <span v-else>
              {{
                state.confirmed
                  ? "Thanks for your confirmation"
                  : "Confirmed! I'll be attending"
              }}
            </span>
          </button>
        </form>
      </div>
      <!--  -->
      <div
        data-title="Registry"
        data-align="center"
        class="text-center text-grey-dark mt-20 mb-12"
      >
        Visit our registry
      </div>
      <a
        href="https://paystack.com/pay/qf8ntg48m4"
        target="blank"
        class="action-btn block w-fit mx-auto"
      >
        <VisitRegistryIcon width="130" color="black" />
      </a>
    </div>
  </div>
</template>
<script setup>
import {
  ref,
  reactive,
  computed,
  watch,
  inject,
  onMounted,
  onBeforeUnmount,
} from "vue";
import {
  collection,
  query,
  where,
  orderBy,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import setAbortableTimeout from "@/utils/setAbortableTimeout";
// import useEventListener from "@/composables/useEventListener";

import VisitRegistryIcon from "@/components/icons/visit-registry.vue";
import PageCloseButton from "@/components/page-close-button.vue";
import ClickWrapper from "@/components/ClickWrapper.vue";
import Loader from "@/components/loader.vue";

import b1 from "@/assets/images/rsvp/1.jpg";
// import b2 from "@/assets/images/rsvp/2.jpg";
// import b3 from "@/assets/images/rsvp/3.jpg";

const db = inject("firestore");

const state = reactive({
  // form: {
  //   placeholder: "Type here",
  //   name: "",
  //   slots: null,
  //   invitee: {},
  // },
  form: {
    invitee: "",
    slots: 1,
  },
  // invitees: [],
  focused: false,
  loading: false,
  fetching: false,
  confirmed: false,
});
const banner = ref(null);
// const images = [b1, b2, b3];
const images = [b1];
const index = ref(0);
// const collectionName = "invites";
let bannerTimeout;
let abortController;

// const showList = computed(
//   () => state.fetching || (state.focused && state.invitees.length)
// );
// const disabled = computed(() => !(state.form.invitee.id && state.form.slots));
const disabled = computed(() => !(state.form.invitee && state.form.slots));

// useEventListener(banner, 'transitionend', handleImageChange)

// watch(
//   () => state.form.name,
//   () => {
//     abortController?.abort?.();
//     abortController = new AbortController();
//     setAbortableTimeout(getInvitees, 500, abortController.signal);
//   }
// );
// watch(
//   () => state.confirmed,
//   (newVal) => {
//     if (newVal) {
//       setTimeout(() => {
//         state.confirmed = false;
//         state.form = {
//           slots: null,
//           invitee: null,
//           name: "",
//         };
//       }, 2000);
//     }
//   }
// );

// onMounted(() => {
//   bannerTimeout = setTimeout(() => {
//     banner.value.classList.add("switch");
//   }, 3000);
// });

// onBeforeUnmount(() => clearTimeout(bannerTimeout));

function handleImageChange(event) {
  const el = banner.value;
  if (!el) return;
  if (el.classList.contains("switch")) {
    index.value = (index.value + 1) % images.length;
    el.classList.remove("switch");
  } else {
    bannerTimeout = setTimeout(() => {
      el.classList.add("switch");
    }, 3000);
  }
}

// async function getInvitees() {
//   if (!state.form.name.length) return;

//   try {
//     state.fetching = true;
//     const q = query(
//       collection(db, collectionName),
//       where("name", ">=", state.form.name),
//       where("name", "<=", state.form.name + "~"),
//       orderBy("name")
//     );
//     const snapshot = await getDocs(q);
//     const list = [];
//     snapshot.forEach((doc) => {
//       list.push({
//         id: doc.id,
//         ...doc.data(),
//       });
//     });
//     state.invitees = list;
//   } finally {
//     state.fetching = false;
//   }
// }

// function selectInvitee(person) {
//   state.form.invitee = person;
//   state.form.slots = person.admittance;
//   state.form.name = person.name;
//   state.form.placeholder = "";
//   state.focused = false;
// }

async function confirmAttendance() {
  try {
    state.loading = true;
    // await updateDoc(doc(db, collectionName, state.form.invitee.id), {
    //   rsvp: true,
    // });
    state.confirmed = true;
  } finally {
    state.loading = false;
  }
}

/*
		let handler = window.PaystackPop.setup({
	    key: import.meta.env.VITE_PAYSTACK_API_KEY,
	    email: 'test@email.com',
	    amount: state.form.donation * 100,
	    label: 'Donation',
	    onClose: function(){
	      alert('Window closed.');
	    },
	    callback: function(response){
	      let message = 'Payment complete! Reference: ' + response.reference;
	      alert(message);
	    }
	  })

	  handler.openIframe();
	*/
</script>
