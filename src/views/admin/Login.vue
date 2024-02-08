<!-- src/views/Login.vue -->
<template>
    <div class="login-container">
       <div class="login-form">
          <h1 class="mb-3 text-center">Đăng nhập</h1>
          <div class="mb-3 form-row align-items-center">
             <label for="InputEmail" class="form-label">Email:</label>
             <input type="email" class="form-control" id="InputEmail" v-model="email">
          </div>
          <div class="mb-3 form-row align-items-center">
             <label for="InputPassword" class="form-label">Mật khẩu</label>
             <input type="password" class="form-control" id="InputPassword" v-model="password">
          </div>
          <div class="mb-3 text-center">
             <TheButton3d :text="'Login'" @click="login()" />
          </div>
          <div class="mb-3 text-center">
             <div v-if="!validated" class="alert_msg">{{ msgvali }}</div>
          </div>
       </div>
    </div>
 </template>
 
 <script>
 import TheButton3d from '../../components/admin/TheButton3d.vue'
 import { useAuthStore } from '../../stores/auth';
 import { useLoadStore } from '../../stores/load';
 export default {
    name: 'Login',
    components: { TheButton3d },
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
                this.$router.push('/Home');
             }
          } catch (error) {
             console.error(error);
          }
       },
    },
 };
 </script>
 
 <style scoped>
 .login-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
 }
 
 .login-form {
    position: relative;
    width: 400px;
    height: auto;
    border: 1px solid #ccc;
    padding: 16px;
 }
 
 .form-row {
    display: flex;
    align-items: center;
 }
 
 .form-label {
    width: 200px;
 }
 </style>
 