import { City } from '../slices/weather7days'
import { fetchDataForPast } from '../slices/weatherforpast'

export const submitForPast = (city: City, time: number) => async (dispatch: any) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${city.lat}&lon=${city.lon}&dt=${time}&appid=a8bda3d6c35729ebd9a60a4aedcb4178`,
  )
    .then((data) => data.json())
    .then((res) => {
      dispatch(fetchDataForPast(res))
    })
}
