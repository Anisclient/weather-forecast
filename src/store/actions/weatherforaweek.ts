import { City } from '../../components/selectcity/selectcity'
import { fetchForecastForAWeek } from '../slices/weatherforaweek'

export const submitLoginFormActionCreator = (city: City) => async (dispatch: any) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&units=metric&lang=ru&exclude=current,minutely,hourly&appid=a8bda3d6c35729ebd9a60a4aedcb4178`,
  )
    .then((data) => data.json())
    .then((res) => {
      dispatch(fetchForecastForAWeek(res))
    })
}
