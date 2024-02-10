// src/stores/user.js
import { defineStore } from 'pinia';
import { API_ROUTER } from '../api/apiRouters'
import router from '../router/index'
import Axios  from '../api/axios'
import commonFunction  from '../assets/js/common'

export const useUserStore = defineStore('user', {
  state: () => ({
    userList: [],
    userCv: [],
    pagination: {
      total: 0,
      per_page: 2,
      from: 1,
      to: 0,
      current_page: 1
    },
  }),
  actions: {
    async getCv(id) {
      try {
        const response = await Axios.get(API_ROUTER.User.getCv + '/' + id);
        let status = response.status;
        if (status === 200) {
            this.userCv = response.data;
        } else {
            this.userCv = [];
        }
      } catch (error) {
        console.error(error);
        this.userCv = [];
      }
    },
  },
});