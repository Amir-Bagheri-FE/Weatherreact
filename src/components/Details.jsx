import Info from "../sections/info";
import SearchBar from "../sections/SearchBar";
import TrendCity from "../sections/TrendCity";

function Details({APIcall,Data}) {
  return (
    <div className="p-4 h-full overflow-hidden w-full flex flex-col justify-between bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600 rounded-3xl space-y-4">
      <SearchBar APIcall={APIcall}/>
      <TrendCity APICall={APIcall}/>
      <Info data={Data}/>
    </div>
  );
}
export default Details;
