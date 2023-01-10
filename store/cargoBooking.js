import { defineStore } from 'pinia'

export const useCargoBookingStore = defineStore("cargo-booking", {
  id: 'cargo-booking-store',
  state: () => {
    return {
      cargoBooking: {
        departure: {
            date: '',
            time: '',
            pick_up_location: 'Current Location',
            vertiport_location: 'AMS VERT',
            distance_km: '12',
        },
        arrival: {
            date: '',
            time: '',
            drop_off_location: 'Rue du Tilleul 80-140, Brussels',
            vertiport_location: 'BRU PAW',
            distance_km: '12',
        },
        fare: {
            total: '€ 13.00',
        },
        packages: 1,
      }
    }
  },
  actions: {},
  getters: {
    getCargoBooking: state => state.cargoBooking,
    getTotalFare: state => state.cargoBooking.fare.total,
  },
  actions: {
    setPackageCount: (state, count) => {
      state.cargoBooking.packages = count
    },
    setDepartureDate: (state, date) => {
      state.cargoBooking.departure.date = date
    },
    setDepartureTime: (state, time) => {
      state.cargoBooking.departure.time = time
    },
    setArrivalDate: (state, date) => {
      state.cargoBooking.arrival.date = date
    },
    setArrivalTime: (state, time) => {
      state.cargoBooking.arrival.time = time
    }
  }
})