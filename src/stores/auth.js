// src/store/auth.js
import { defineStore } from 'pinia';
import { API_ROUTER } from '../api/apiRouters'
import router from '../router/index'
import Axios  from '../api/axios'
import commonFunction  from '../assets/js/common'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
  }),
  actions: {
    async login(email, password) {
      try {
        const response = await Axios.post(API_ROUTER.Login, { email: email, password: password } );
        let status = response.status
        if (status === 200) {
            let token = response.data.token
            commonFunction.setSession(token)
            this.isAuthenticated = true;
        } else {
            this.isAuthenticated = false;
        }
      } catch (error) {
        this.isAuthenticated = false;
      }
    },
    async logout() {
      commonFunction.removeSession()
      router.go()
    },
  },
});
