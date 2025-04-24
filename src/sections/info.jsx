const Info = () => {
  return (
    <div className="h-[30%] mt-5 flex flex-col">
      <h2 className="font-black text-center">Weather Information</h2>
      <ul>
        <li className="my-3">Current Temperature: 25°C</li>
        <li className="my-3">Humidity: 60%</li>
        <li className="my-3">Wind Speed: 15 km/h</li>
        <li className="my-3">Forecast: Sunny</li>
      </ul>
    </div>
  );
};

export default Info;
