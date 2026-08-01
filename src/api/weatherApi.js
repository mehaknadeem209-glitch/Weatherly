import axios from 'axios'


export async function weatherApi(lat, lon) {
  const response = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&&hourly=temperature_2m,precipitation_probability&daily=temperature_2m_max,temperature_2m_min`,
  );
  const res = response.data;
  return res;
} 

