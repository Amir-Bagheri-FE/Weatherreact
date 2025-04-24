const SearchBar = ({ eventHandle }) => {
  return (
    <div className="h-[10%] flex justify-between">
      <input
        type="text"
        placeholder="search for a city"
        className="py-0 px-[90px] focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:border-b-4 focus:border-green-500 focus:rounded-[8px] focus:outline-none focus:animate-pulse"
      />
      <button
        className="bg-green-500 py-0 px-5 cursor-pointer rounded-[5px]"
        onClick={eventHandle}
      >
        🔎
      </button>
    </div>
  );
};
export default SearchBar;
