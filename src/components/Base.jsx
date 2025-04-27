import Details from "./Details";
import WeatherMain from "./WeatherMain";

import.meta.env.VITE_WEATHER_API_KEY;
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function Base() {
  async function APIcall(city) {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const data = await res.json();
    } catch (error) {
      console.error(error, "error occurred");
    }
  }
  return (
    <div className="flex h-[100vh]  w-full bg-cover bg-center bg-no-repeat">
     <WeatherMain />
     <Details callAPI={APIcall}/>
    </div>
  );
}
export default Base;
