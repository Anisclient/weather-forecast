import { createSlice } from '@reduxjs/toolkit'

export interface WeatherForPastState {
  dataForPast: unknown
  currentCityForPast: string
  time: string
  isResult: boolean
}

const initialState: WeatherForPastState = {
  dataForPast: '',
  currentCityForPast: '',
  time: '',
  isResult: false,
}

const slice = createSlice({
  name: 'weather-for-past',
  initialState,
  reducers: {
    fetchDataForPast(state, action) {
      state.dataForPast = action.payload
      state.isResult = true
    },
    setCurrentCityForPast(state, action) {
      state.currentCityForPast = action.payload
    },
    setTimeForPast(state, action) {
      state.time = action.payload
    },
  },
})

export const { fetchDataForPast, setCurrentCityForPast, setTimeForPast } = slice.actions
export const reducer = slice.reducer
