import SearchBar from "../sections/SearchBar";
import TrendCity from "../sections/TrendCity";

function Details() {
  return (
    <div className="w-[30%] p-3 h-full bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600 rounded-3xl">
      <SearchBar />
      <TrendCity />
    </div>
  );
}
export default Details;
