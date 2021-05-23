import { createSlice } from '@reduxjs/toolkit'

export interface WeatherforaweekState {
  weatherforaweek: unknown
  city: string
}

const initialState: WeatherforaweekState = {
  weatherforaweek: '',
  city: '',
}

const slice = createSlice({
  name: 'weather-for-a-week',
  initialState,
  reducers: {
    fetchForecastForAWeek(state, action) {
      state.weatherforaweek = action.payload
    },
    setCity(state, action) {
      state.city = action.payload
    },
  },
})

export const { fetchForecastForAWeek, setCity } = slice.actions
export const reducer = slice.reducer
