import { useState } from "react";
import Details from "./Details";
import WeatherMain from "./WeatherMain";

import.meta.env.VITE_WEATHER_API_KEY;
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function Base() {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);
  let [predict, SetPredict] = useState({});
  async function APIcall(city) {
    SetPredict({});
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      console.error(error, "error occurred");
      setLoading(false);
    }
  }
  // calling data for five day prediction
  async function FiveDayCall() {
    let City_Name = weatherData.name ? weatherData.name : null;
    try {
      setLoading(true);
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${City_Name}&appid=${API_KEY}&units=metric`
      );
      const Data5 = await response.json();
      SetPredict(Data5);
    
      
      setLoading(false);
      
    } catch (error) {
      console.error(error, "error fetching Data");
      setLoading(false);
    }
  }

  return (
    <div className="flex h-[100vh] w-full bg-cover bg-center bg-no-repeat relative">
      {loading ? (
        <div className="h-full w-full bg-[rgba(255,255,255,0.40)] flex justify-center items-center z-20 absolute inset-0">
          <p className="font-bold text-5xl animate-ping">Loading...☁️</p>
        </div>
      ) : null}
      <WeatherMain data={weatherData} predictdata={predict} />
      <Details
        APIcall={APIcall}
        Data={weatherData}
        PredictFunction={FiveDayCall}
        PredictData={predict}
      />
    </div>
  );
}
export default Base;
