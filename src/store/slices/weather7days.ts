import { createSlice } from '@reduxjs/toolkit'

export interface City {
  id: number
  name: string
  lat: number
  lon: number
}

export interface Weather7daysState {
  data7days: unknown
  currentCity7days: string
  cities: City[]
}

const initialState: Weather7daysState = {
  data7days: '',
  currentCity7days: '',
  cities: [
    { id: 1, name: 'Самара', lat: 53.195873, lon: 50.100193 },
    { id: 2, name: 'Тольятти', lat: 53.507836, lon: 49.420393 },
    { id: 3, name: 'Саратов', lat: 51.533557, lon: 46.034257 },
    { id: 4, name: 'Казань', lat: 55.796127, lon: 49.106405 },
    { id: 5, name: 'Краснодар', lat: 45.03547, lon: 38.975313 },
  ],
}

const slice = createSlice({
  name: 'weather-7-days',
  initialState,
  reducers: {
    fetchDataFor7days(state, action) {
      state.data7days = action.payload
    },
    setCurrentCity(state, action) {
      state.currentCity7days = action.payload
    },
  },
})

export const { fetchDataFor7days, setCurrentCity } = slice.actions
export const reducer = slice.reducer
