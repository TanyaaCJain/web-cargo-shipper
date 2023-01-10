import { defineStore } from 'pinia'

export const useUserStore = defineStore("user", {
  id: 'user-store',
  state: () => {
    return {
      user: {
        name: 'Elizah',
        rideStats: {
            rideOpen: 1,
            rideDone: 32,
            arrowPoints: 3182
        }
      }
    }
  },
  actions: {},
  getters: {
    getUser: state => state.user,
  },
})