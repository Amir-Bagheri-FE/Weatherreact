function WeatherMain() {
  return (
    <div
      id="main"
      className="w-[70%] h-full bg-[rgba(55,176,255,0.34)] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[7px] border border-[rgba(55,176,255,0.3)]"
    >
      <div className="flex flex-col justify-center items-center w-[50%] h-2.5">
        <h2>please search for a city</h2>
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          className="animation-pulse"
          alt=""
        />
      </div>
      <div className="w-full h-[200px] bg-[rgba(55,176,255,0.34)] backdrop-blur-[7px]">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
export default WeatherMain;
