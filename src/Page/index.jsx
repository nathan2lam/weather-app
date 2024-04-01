import React, { useState } from "react"
import Display from "./Display"
import Searchbar from "./Searchbar"
import Title from "./Title"

const Page = () => {
    const [weatherData, setWeatherData] = useState(null);

    const API_KEY = "00741cee377564fc74e1118f5409a4c4"
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=imperial`

    const fetchWeatherData = async (city) => {
        try {
          const response = await fetch(`${API_URL}&q=${city}`);
          if(!response.ok) {
            setWeatherData(null)
            throw new Error("Invalid input")
          }
          const data = await response.json();
          setWeatherData(data);
          console.log(data);
        } catch (error) {
          setWeatherData(null);
          console.error('Error fetching weather data:', error);
        }
    };
    
    return (
        <>
            <Title />
            <Searchbar onSearch={fetchWeatherData} />
            <Display weatherData={weatherData} />
        </>
    )
}

export default Page;