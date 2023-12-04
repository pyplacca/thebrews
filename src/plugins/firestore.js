import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

export default {
  install(vueApp, config) {
    const app = initializeApp(config);
    const db = getFirestore(app);
    getStorage(app);
    getAnalytics(app);

    vueApp.provide("firestore", db);
  },
};
