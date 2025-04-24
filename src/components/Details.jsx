import Info from "../sections/info";
import SearchBar from "../sections/SearchBar";
import TrendCity from "../sections/TrendCity";

function Details() {
  return (
    <div className="w-[30%] p-3 h-full flex flex-col justify-between bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600 rounded-3xl space-y-4">
      <SearchBar />
      <TrendCity />
      <Info />
    </div>
  );
}
export default Details;
