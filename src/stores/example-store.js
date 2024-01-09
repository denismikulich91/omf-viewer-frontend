import { defineStore } from 'pinia';

export const useLogInStore = defineStore('isLoggedIn', {
  state: () => ({
    isLoggedIn: false,
  }),
  // getters: {
  //   isLoggedIn: (state) => state.isLoggedIn,
  // },
  actions: {
    logIn() {
      this.isLoggedIn = true;
    },

    logOut() {
      this.isLoggedIn = false;
    },
  },
});
