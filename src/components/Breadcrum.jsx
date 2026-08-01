import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import weatherly from "../assets/weatherly.png";
import { geoCodingApi } from '../api/geoApi';

const Breadcrum = () => {
 
  const [city, setCity] = useState('')
  const [inputCity, setInputCity] = useState({})
  async function  searchCity(){
   
    const data = await geoCodingApi(city)
    setInputCity(data)
    console.log(inputCity)
    setCity("")
     
   }
  
  return (
    <section
      className="breadcrum relative w-full flex justify-around items-center 
    bg-[var(--primary)] h-[75px]"
    >
      <div className="fixed flex justify-around w-full items-center">
        <div className="logo ">
          <img
            src={weatherly}
            alt="logo"
            className="h-[60px] hover:scale-110 contain-content rounded-full border-2 
             border-[var(--border)]"
          />
        </div>
        <div className="flex justify-center items-center  w-70% h-90%">
          <span className="p-2 hover:scale-120">
            <FaSearch />
          </span>
          <input
            onChange={(e) => {
              return setCity(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchCity();
              }
            }}
            value={city}
            type="text"
            placeholder="Location"
            className="w-90% h-70% p-3 outline-0  placeholder-[var(--placeholder)] 
            text-[var(--text-primary)]
            bg-[var(--input-bg)] border-[var(--input-border)]
            focus:border-[var(--input-focus)] rounded-bl-full rounded-tl-full"
          />
          <button
            onClick={searchCity}
            className="p-3 color[var(--primary)]
           bg-[var(--btn-secondary)] hover:bg-[var(--btn-secondary-hover)] 
           hover:cursor-pointer
           rounded-tr-full rounded-br-full"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default Breadcrum