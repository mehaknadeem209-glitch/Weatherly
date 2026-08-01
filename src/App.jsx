import { useState, useEffect } from 'react'
import {weatherApi} from'./api/weatherApi.js'
import { geoCodingApi } from './api/geoApi.js'
import Breadcrum from './components/Breadcrum.jsx'
import Navbar from './components/Navbar.jsx'
import "./routes/routes.js"
const App = () => {
   
      const [weather, setWeather] = useState(null)   
       useEffect(() => {
      weatherApi(34.9, 70.6).then((res) => setWeather(res));
        }, []);
       console.log(weather)
    
    if (!weather){
      return <h1>Loading...</h1>
    }
 
 
    
  return ( 
  <>
   <Breadcrum/>
   <Navbar/>
   </>
  )  
}

export default App 