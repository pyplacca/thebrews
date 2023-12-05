import { createApp } from "vue";

import App from "@/App.vue";
import router from "@/router";
import firestore from "@/plugins/firestore";
import paystack from "@/plugins/paystack";

import "@/tailwind.css";

const app = createApp(App);

app.use(router);
app.use(firestore, {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "thebrews-3a3b4.firebaseapp.com",
  projectId: "thebrews-3a3b4",
  storageBucket: "thebrews-3a3b4.appspot.com",
  messagingSenderId: "39090273232",
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: "G-5MQ0YD04M4",
});
app.use(paystack);

app.mount("#app");
