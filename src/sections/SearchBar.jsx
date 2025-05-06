import { useRef } from "react";

const SearchBar = ({ APIcall }) => {
  const refTry=useRef(null)
  return (
    <div className="p-3 flex   flex-wrap gap-2">
      <input
        type="text"
        placeholder="search for a city"
        className="pl-4 w-full md:w-auto focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:border-b-4 border-2 border-green-500 rounded-xl focus:border-green-500 focus:rounded-[8px] focus:outline-none focus:animate-pulse"
        id="CityName"
        ref={refTry}
      />
      <button
        className="bg-green-500 py-0 px-5 cursor-pointer rounded-[5px]"
        onClick={()=>{APIcall(refTry.current.value)}}
      >
        🔎
      </button>
    </div>
  );
};
export default SearchBar;
