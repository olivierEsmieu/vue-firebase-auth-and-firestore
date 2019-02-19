<template>
  <div class="signup">
    <h3>New Account</h3>
    <input v-model="email" type="text" placeholder="Email" /><br />
    <input v-model="password" type="password" placeholder="Password" /><br />
    <button @click="signup">Sign Up</button>
    <span>Or go back to<router-link to="/login"> login</router-link></span>
  </div>
</template>
<script>
//import firebase from "firebase";
import firebase from 'firebase/app';
import 'firebase/auth';
export default {
  name: "signup",
  data() {
    return { email: "", password: "" };
  },
  methods: {
    signup: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace("home");
          },
          error => {
            alert("oops. " + error.message);
          }
        );
    }
  }
};
</script>
<style scoped>
.signup {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 1px;
}
button {
  margin: 10px 10px;
  width: 20%;
  cursor: pointer;
}
span {
  display: block;
  margin-top: 10px;
  font-size: 11px;
  text-decoration: underline;
  //cursor: pointer;
}
</style>
