<script>
 import { useAuthStore } from '../../stores/auth';
 import { useLoadStore } from '../../stores/load';
 export default {
    name: 'Login',
    setup() {
       const authStore = useAuthStore();
       const loadStore = useLoadStore();
       return {
          authStore,
          loadStore
       };
    },
    data() {
       return {
          email: '',
          password: '',
          validated: true,
          msgvali: '',
          loader: false
       };
    },
    methods: {
       async login() {
          try {
             // this.$swal('Hello  world!!!');
             this.loadStore.setLoader(true);
             await this.authStore.login(this.email, this.password);
             this.loadStore.setLoader(false);
             this.loader = false
             if (this.authStore.isAuthenticated) {
                this.$router.push('/admin/dashboard');
             }
          } catch (error) {
             console.error(error);
          }
       },
    },
 };
 </script>

<template>
    <div class="login">
         <img src="../../assets/image/login-bg.png" alt="image" class="login__bg">

         <form action="" class="login__form">
            <h1 class="login__title">Login</h1>

            <div class="login__inputs">
               <div class="login__box">
                  <input id="InputEmail" type="email" placeholder="Email ID" required class="login__input" v-model="email" autofocus>
                  <i class="ri-mail-fill"></i>
               </div>

               <div class="login__box">
                  <input id="InputPassword" type="password" placeholder="Password" required class="login__input" v-model="password">
                  <i class="ri-lock-2-fill"></i>
               </div>
            </div>

            <div class="login__check">
               <div class="login__check-box">
                  <input type="checkbox" class="login__check-input" id="user-check">
                  <label for="user-check" class="login__check-label">Remember me</label>
               </div>

               <a href="#" class="login__forgot">Forgot Password?</a>
            </div>
            <div class="mb-3 text-center">
               <div v-if="!validated" class="alert_msg">{{ msgvali }}</div>
            </div>
            <button type="button" class="login__button" @click="login()">Login</button>

            <div class="login__register">
               Don't have an account? <a href="#">Register</a>
            </div>
         </form>
      </div>
 </template>
 
 <style scoped>
/*=============== GOOGLE FONTS ===============*/
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

/*=============== BASE ===============*/
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body,
input,
button {
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
}

a {
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

/*=============== LOGIN ===============*/
.login {
  position: relative;
  height: 100vh;
  display: grid;
  align-items: center;
}

.login__bg {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.login__form {
  position: relative;
  margin-inline: 1.5rem;
  background-color: hsla(0, 0%, 100%, .01);
  border: 2px solid hsla(0, 0%, 100%, .7);
  padding: 2.5rem 1rem;
  color: #FFF;
  border-radius: 1rem;
  backdrop-filter: blur(16px);
}

.login__title {
  text-align: center;
  font-size: 2em;
  margin-bottom: 1.25rem;
}

.login__inputs, 
.login__box {
  display: grid;
}

.login__inputs {
  row-gap: 1.25rem;
  margin-bottom: 1rem;
}

.login__box {
  grid-template-columns: 1fr max-content;
  column-gap: .75rem;
  align-items: center;
  border: 2px solid hsla(0, 0%, 100%, .7);
  padding-inline: 1.25rem;
  border-radius: 4rem;
}

.login__input, 
.login__button {
  border: none;
  outline: none;
}

.login__input {
  width: 100%;
  background: none;
  color: #FFF;
  padding-block: 1rem;
}

.login__input::placeholder {
  color: #FFF;
}

.login__box i {
  font-size: 1.25rem;
}

.login__check, 
.login__check-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.login__check {
  margin-bottom: 1rem;
  font-size: .813rem;
}

.login__check-box {
  column-gap: .5rem;
}

.login__check-input {
  width: 1rem;
  height: 1rem;
  accent-color: #FFF;
}

.login__forgot {
  color: #FFF;
}

.login__forgot:hover {
  text-decoration: underline;
}

.login__button {
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #FFF;
  border-radius: 4rem;
  color: var(#000);
  font-weight: 500;
  cursor: pointer;
}

.login__register {
  font-size: .813rem;
  text-align: center;
}

.login__register a {
  color: #FFF;
  font-weight: 500;
}

.login__register a:hover {
  text-decoration: underline;
}

/*=============== BREAKPOINTS ===============*/
/* For medium devices */
@media screen and (min-width: 576px) {
  .login {
    justify-content: center;
  }
  .login__form {
    width: 420px;
    padding-inline: 2.5rem;
  }
  .login__title {
    margin-bottom: 2rem;
  }
}
 </style>
 