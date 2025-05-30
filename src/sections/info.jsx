const Info = ({ data , predictData }) => {
  const convertTimezone = (timezone) => {
    if (!timezone && timezone !== 0) return "";
    const date = new Date();
    const utcOffset = date.getTimezoneOffset() * 60; // Convert minutes to seconds
    const localTime = new Date(
      (date.getTime() / 1000 + timezone + utcOffset) * 1000
    );
    return localTime.toLocaleTimeString();
  };
  return (
    <div className="h-[30%] mt-5 flex flex-col">
      <h2 className="font-black text-center max-md:text-[12px]">Weather Information</h2>
      <ul className="font-black text-[rgb(94,255,228)]">
        <li className="my-3 max-md:text-[10px]">feels like: {predictData?.list?.[35].main?.feels_like || data?.main?.feels_like || ""}</li>
        <li className="my-3 max-md:text-[10px]">wind speed : {predictData?.list?.[35].wind?.speed || data?.wind?.speed || ""}</li>
        <li className="my-3 max-md:text-[10px]">Humidity: {predictData?.list?.[35].main?.humidity || data?.main?.humidity || ""}</li>
        <li className="my-3 max-md:text-[10px]">timeZone: {convertTimezone(data?.timezone)}</li>
        {predictData?.city?.population && (
          <li>Population: {predictData.city.population}</li>
        )}
      </ul>
    </div>
  );
};

export default Info;
