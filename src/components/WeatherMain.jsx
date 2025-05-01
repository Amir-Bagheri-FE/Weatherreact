function WeatherMain({ data }) {
 const weatherIconMap={
  '01d':'wi-day-sunny',
  '01n':'wi-night-clear',
  '02d':'wi-day-cloudy',
  '02n':'wi-night-alt-cloudy',
  '03d':'wi-cloud',
  '03n':'wi-cloud',
  '04d':'wi-cloudy',
  '04n':'wi-cloudy',
  '09d':'wi-showers',
  '09n':'wi-showers',
  '10d':'wi-rain',
  '10n':'wi-rain',
  '11d':'wi-thunderstorm',
  '11n':'wi-thunderstorm',
  '13d':'wi-snow',
  '13n':'wi-snow',
  '50d':'wi-fog',
  '50n':'wi-fog',
  
 }
 const weathericon=weatherIconMap[data?.weather?.[0].icon];
  return (
    <div id="main" className="flex flex-col justify-between p-1  w-[70%] h-full bg-gradient-to-bl from-blue-700 via-blue-900 to-blue-600 bg-opacity-30 rounded-2xl backdrop-blur-md border border-blue-900">

      <div className="flex flex-col justify-center items-center w-full h-auto mt-6 py-4">
        <h2 className="text-4xl text-white font-semibold "> {data.name || 'please search for a city'} </h2>
        
        <i className={`wi ${weathericon || 'wi-day-sunny'} mt-2 text-3xl text-amber-400 animate-pulse`}></i>
      </div>

      <div className="w-full h-48 p-2 bg-blue-200 bg-opacity-30 backdrop-blur-md mt-4 rounded-lg flex justify-around items-center">

        <div className="w-[25%] h-[70%] m-0.5 flex justify-center items-center bg-white rounded-xl shadow-md">
          <h2 className="font-black">
            ⬆️max temperature : <br/>
            {data?.main?.temp_max || ''}
            <br/>
            ⬇️min temperature : <br/>
            {data?.main?.temp_min || ""}
          </h2>
        </div>

        <div className="w-[50%] h-[70%] p-5 m-0.5 items-center flex justify-center bg-white rounded-xl shadow-md">
          <h2 className="font-black">weather type: {data?.weather?.[0]?.description || "N/A"}</h2>
          <br />
          <br />
        </div>
        
        <div className="w-[25%] h-[70%] p-5 m-0.5 items-center flex justify-center bg-white rounded-xl shadow-md">
        <h2 className="font-black">temperature: {data?.main?.temp || "N/A"}°C</h2>
        </div>
      </div>
    </div>
  );
}
export default WeatherMain;
