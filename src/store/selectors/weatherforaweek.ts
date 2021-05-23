import { AppStore } from '../reducers'
import { createSelector } from 'reselect'
import { WeatherforaweekState } from '../slices/weatherforaweek'

export const rootSelector = createSelector<AppStore, AppStore, WeatherforaweekState>(
  (state) => state,
  (state) => state.weatherforaweek,
)

// export const city = createSelector(rootSelector, (state) => state.city)
