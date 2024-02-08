// src/store/user.js
import { defineStore } from 'pinia';
import { API_ROUTER } from '../api/apiRouters'
import Axios  from '../api/axios'

export const userStore = defineStore('user', {
  state: () => ({
    userList: [],
    pagination: {
      total: 0,
      per_page: 2,
      from: 1,
      to: 0,
      current_page: 1
    },
  }),
  actions: {
    async getAll(page) {
      try {
        const response = await Axios.get(API_ROUTER.User.getAll, {
          page: page
        });
        let status = response.status
        if (status === 200) {
            this.userList = response.data.user_list.data;
            this.pagination = response.data.user_list;
            console.log(this.pagination)
        } else {
            this.userList = [];
        }
      } catch (error) {
        this.userList = [];
      }
    }
  },
});
