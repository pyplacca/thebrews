export default {
  install(vueApp) {
    vueApp.provide("paystack", {
      paymentLink: import.meta.env.VITE_PAYSTACK_PAYMENT_LINK,
    });
  },
};
