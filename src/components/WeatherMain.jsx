function WeatherMain() {
  return (
    <div
      id="main"
      className="flex flex-col justify-between p-1.5 w-[70%] h-full bg-blue-200 bg-opacity-30 rounded-2xl backdrop-blur-md border border-blue-900"
    >
      <div className="flex flex-col justify-center items-center w-full h-auto py-4">
        <h2 className="text-gray-700 font-semibold">Please search for a city</h2>
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          className="animate-pulse mt-2"
          alt="Weather Icon"
        />
      </div>

      <div className="w-full h-48 bg-blue-200 bg-opacity-30 backdrop-blur-md mt-4 rounded-lg flex justify-around items-center">
        <div className="w-[25%] h-[70%] m-0.5   bg-white rounded-xl shadow-md"></div>
        <div className="w-[50%] h-[70%] m-0.5 bg-white rounded-xl shadow-md"></div>
        <div className="w-[25%] h-[70%] m-0.5 bg-white rounded-xl shadow-md"></div>
      </div>
    </div>
  );
}
export default WeatherMain;
