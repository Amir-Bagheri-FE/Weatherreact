import WeatherMain from "./WeatherMain";

function Base() {
  return (
    <div className="h-[100vh] w-full bg-g bg-cover bg-center bg-no-repeat bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2F4k-nature&psig=AOvVaw0R4ZbGfdZlR_TBKE7VxW9e&ust=1745419105572000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIC92oPv64wDFQAAAAAdAAAAABAE')]">
      <WeatherMain />
    </div>
  );
}
export default Base;
