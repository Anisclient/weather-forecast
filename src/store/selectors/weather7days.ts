import { AppStore } from '../reducers'
import { createSelector } from 'reselect'
import { Weather7daysState } from '../slices/weather7days'

export const weather7daysData = createSelector<AppStore, AppStore, Weather7daysState>(
  (state) => state,
  (state) => state.weather7days,
)

// export const city = createSelector(rootSelector, (state) => state.city)
