import { combineReducers } from '@reduxjs/toolkit'
import { reducer as reducer7days, Weather7daysState } from './slices/weather7days'

export type AppStore = {
  weather7days: Weather7daysState
}

export default combineReducers<AppStore>({
  weather7days: reducer7days,
})
