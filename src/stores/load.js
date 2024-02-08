// Trong store/loader.js
import { defineStore } from 'pinia';

export const useLoadStore = defineStore('load', {
  state: () => ({
    loader: false,
  }),
  actions: {
    setLoader(loading) {
      this.loader = loading;
    },
  },
});
