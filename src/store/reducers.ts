import { combineReducers } from '@reduxjs/toolkit'
import {
  reducer as fetchForecastForWeekReducer,
  WeatherforaweekState,
} from './slices/weatherforaweek'

export type AppStore = {
  weatherforaweek: WeatherforaweekState
}

export default combineReducers<AppStore>({
  weatherforaweek: fetchForecastForWeekReducer,
})
