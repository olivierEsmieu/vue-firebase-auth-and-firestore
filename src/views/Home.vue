<template>
  <div class="home">
    <img width="10%" alt="Marie" src="../assets/MariePortugal" />
    <TestFirestore msg="Test Firestore" />
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
//import firebase from "firebase";
import firebase from "firebase/app";
import "firebase/auth";
import TestFirestore from "@/components/TestFirestore.vue";
/*
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: '### FIREBASE API KEY ###',
  authDomain: '### FIREBASE AUTH DOMAIN ###',
  projectId: '### CLOUD FIRESTORE PROJECT ID ###'
});
*/

// @ is an alias to /src 

export default {
  name: "home",
  components: {
    TestFirestore
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
};
</script>
