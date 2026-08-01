import React from 'react'

const Navbar = () => {
  return (
    <section className="navbar" id="nabar">
      <nav className="w-full  h-16 size-34px flex justify-start items-center  font-sans color-[var(--primary)]">
        <ul className="flex justify-start items-center gap-6 ml-30 ">
          <a className="no-underline " href="">
            <li className="navlink">Today</li>
          </a>
          <a className="no-navlinkunderline" href="#hourlyForcast">
            <li className="navlink">Hourly</li>
          </a>
          <a className="no-navlinkunderline" href="#weekltforcast">
            <li className="navlink">Weekly</li>
          </a>
          <a className="no-navlinkunderline" href="#UVindex">
            <li className="navlink">UVIndex</li>
          </a>
          <a className="no-navlinkunderline" href="#airQuality">
            <li className="navlink">AirQuality</li>
          </a>
        </ul>
      </nav>
    </section>
  );
}

export default Navbar