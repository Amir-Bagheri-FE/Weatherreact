import Details from "./Details";
import WeatherMain from "./WeatherMain";

function Base() {
  return (
    <div className="flex h-[100vh]  w-full bg-cover bg-center bg-no-repeat">
     <WeatherMain />
     <Details />
    </div>
  );
}
export default Base;
