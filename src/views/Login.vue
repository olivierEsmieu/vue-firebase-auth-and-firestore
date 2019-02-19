<template>
  <div class="login">
    <h3>Sign in</h3>
    <input v-model="email" type="text" placeholder="Email" /><br />
    <input v-model="password" type="password" placeholder="Password" /><br />
    <button @click="login">Connection</button>
    <p>
      Or sign-in with Google <br />
      <button @click="socialLogin" class="social-button">
        <img alt="google logo" src="../assets/google-icon.png" />
      </button>
    </p>
    <p>
      you don't have an account?
      <router-link to="/sign-up">You can create one</router-link>
    </p>
  </div>
</template>
<script>
//import firebase from "firebase";
import firebase from 'firebase/app';
import 'firebase/auth';
export default {
  name: "login",
  data() {
    return { email: "", password: "" };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace("home");
          },
          err => {
            alert("Ooops " + err.message);
          }
        );
    },
    socialLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(
          result => {
            this.$router.replace("home");
          },
          err => {
            alert("Oops.. " + err.message);
          }
        );
    }
  }
};
</script>
<style scoped>
.login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  // cursor: pointer;
}
button {
  margin-top: 10px;
  width: 20%;
  cursor: pointer;
}
p {
  text-decoration: underline;
  margin-top: 20px;
  // cursor: pointer;
  font-size: 11px;
}
.social-button {
  width: 75px;
  background: white;
  padding: 10px;
  border-radius: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  outline: 0;
  border: 0;
}
.social-button:active {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
.social-button img {
  width: 100%;
}
</style>
