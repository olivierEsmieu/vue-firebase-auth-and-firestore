import Vue from "vue";
//import firebase from "firebase";
import firebase from 'firebase/app';
import 'firebase/auth';

import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
let app = "";
const config = {
  apiKey: "AIzaSyCin9YC63oBdhSe1UdaP5JS9skBj7Gn_jA",
  authDomain: "test-ad78c.firebaseapp.com",
  databaseURL: "https://test-ad78c.firebaseio.com",
  projectId: "test-ad78c",
  storageBucket: "test-ad78c.appspot.com",
  messagingSenderId: "37797073413"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
