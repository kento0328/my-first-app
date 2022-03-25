document.addEventListener("DOMContentLoaded", () => {
    console.log('this is hello_vue.js')
  });

   import { createApp } from "vue";
 import App from "../app.vue";

  document.addEventListener("DOMContentLoaded", () => {
    const app = createApp(App);
    app.mount("#vue-app");
  });