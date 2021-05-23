import { combineReducers } from '@reduxjs/toolkit'
import { reducer as reducer7days, Weather7daysState } from './slices/weather7days'
import { reducer as reducerforpast, WeatherForPastState } from './slices/weatherforpast'

export type AppStore = {
  weather7days: Weather7daysState
  weatherPorPast: WeatherForPastState
}

export default combineReducers<AppStore>({
  weather7days: reducer7days,
  weatherPorPast: reducerforpast,
})
