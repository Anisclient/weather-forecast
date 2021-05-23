import { createSlice } from '@reduxjs/toolkit'

export interface City {
  id: number
  name: string
  lat: number
  lon: number
}

export interface WeatherforaweekState {
  weatherforaweek: unknown
  currentCity: string
  cities: City[]
}

const initialState: WeatherforaweekState = {
  weatherforaweek: '',
  currentCity: '',
  cities: [
    { id: 1, name: 'Самара', lat: 53.195873, lon: 50.100193 },
    { id: 2, name: 'Тольятти', lat: 53.507836, lon: 49.420393 },
    { id: 3, name: 'Саратов', lat: 51.533557, lon: 46.034257 },
    { id: 4, name: 'Казань', lat: 55.796127, lon: 49.106405 },
    { id: 5, name: 'Краснодар', lat: 45.03547, lon: 38.975313 },
  ],
}

const slice = createSlice({
  name: 'weather-for-a-week',
  initialState,
  reducers: {
    fetchForecastForAWeek(state, action) {
      state.weatherforaweek = action.payload
    },
    setCurrentCity(state, action) {
      state.currentCity = action.payload
    },
  },
})

export const { fetchForecastForAWeek, setCurrentCity } = slice.actions
export const reducer = slice.reducer
