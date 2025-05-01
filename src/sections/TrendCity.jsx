function TrendCity({APICall}) {
  return (
    <div className="mt-5 pt-1 border-2 border-t-2 border-b-0 border-l-0 border-r-0">
      <h3 className="text-center">Trending Cities</h3>
      <ul>
        <li className="block font-extrabold m-5 cursor-pointer" onClick={(e)=>{APICall(e.target.textContent)}}>New York</li>
        <li className="block font-extrabold m-5 cursor-pointer" onClick={(e)=>{APICall(e.target.textContent)}}>Florida</li>
        <li className="block font-extrabold m-5 cursor-pointer" onClick={(e)=>{APICall(e.target.textContent)}}>Paris</li>
        <li className="block font-extrabold m-5 cursor-pointer" onClick={(e)=>{APICall(e.target.textContent)}}>Madrid</li>
      </ul>
    </div>
  );
}
export default TrendCity;
