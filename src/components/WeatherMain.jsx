function WeatherMain({ data , predictdata }) {
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
 const weatherIconPredict=predictdata?.list?.[35].weather?.[0].icon
  return (
    <div id="main" className="flex flex-col justify-between p-1  min-w-[70%] h-full bg-gradient-to-bl from-blue-700 via-blue-900 to-blue-600 bg-opacity-30 rounded-2xl backdrop-blur-md border border-blue-900">

      <div className="flex flex-col justify-center items-center w-full h-auto mt-6 py-4">
        <h2 className="text-4xl text-white font-semibold "> {data.name || 'please search for a city'} </h2>
         {predictdata?.list && <h4 className="font-black">information for: {predictdata?.list?.[35].dt_txt}</h4>}
        <i className={`wi ${weatherIconPredict || weathericon || 'wi-day-sunny'} mt-2 text-3xl text-amber-400 animate-pulse`}></i>
      </div>

      <div className="w-full min-h-48 p-0.5 bg-blue-200 bg-opacity-30 backdrop-blur-md mt-4 rounded-lg flex justify-around items-center">

        <div className="w-[30%] h-[70%] m-0.5 flex justify-center items-center bg-white rounded-xl shadow-md">
          <h2 className="font-black text-[12px] max-md:text-[10px]">
            ⬆️max temperature : <br/>
            {predictdata?.list?.[35].main?.temp_max || data?.main?.temp_max || ''}
            <br/>
            ⬇️min temperature : <br/>
            {predictdata?.list?.[35].main?.temp_min || data?.main?.temp_min || ""}
          </h2>
        </div>

        <div className="w-[40%] h-[70%] p-5 m-0.5 items-center flex justify-center bg-white rounded-xl shadow-md">
          <h2 className="font-black text-[17px] max-md:text-[12px]">weather type: {predictdata?.list?.[35].weather?.[0].description || data?.weather?.[0]?.description || "N/A"}</h2>
          <br />
          <br />
        </div>
        
        <div className="w-[30%] h-[70%] p-5 m-0.5 items-center flex justify-center bg-white rounded-xl shadow-md">
        <h2 className="font-black text-[17px] max-md:text-[8px]">temperature: {predictdata?.list?.[35].main?.temp || data?.main?.temp || "N/A"}°C</h2>
        </div>
      </div>
    </div>
  );
}
export default WeatherMain;
