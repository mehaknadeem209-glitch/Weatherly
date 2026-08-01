import axios from "axios";

export async function geoCodingApi(name) {

  const response = await axios.get(
    `https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=10&language=en&format=json`,
  );4
    return response.data.results

}

export function currentLocation(){
  return new Promise((resolve , reject)=>
    {
      navigator.geolocation.getCurrentPosition((position) => {
     const {latitude , longitude} = position.coords
     resolve({latitude , longitude})
    }, (error)=> reject(error)
  )     
    }
  );
}
