import { createSlice } from '@reduxjs/toolkit'

export interface WeatherforaweekState {
  weatherforaweek: unknown
}

const initialState: WeatherforaweekState = {
  weatherforaweek: '',
}

const slice = createSlice({
  name: 'weather-for-a-week',
  initialState,
  reducers: {
    fetchForecastForWeek(state, action) {
      state.weatherforaweek = action.payload
    },
  },
})

export const { fetchForecastForWeek } = slice.actions
export const reducer = slice.reducer
