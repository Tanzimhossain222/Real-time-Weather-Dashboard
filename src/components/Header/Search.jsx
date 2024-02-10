import { useState } from "react";
import searchLogo from "../../assets/search.svg";
import { useLocationContext } from "../../context";
import { getLocationByName } from "../../data/location-data";
import { useDebounce } from "../../hooks";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setSelectedLocation } = useLocationContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchLocation = getLocationByName(searchTerm);
    setSelectedLocation({ ...fetchLocation });
  };

  const doSearch = useDebounce((value) => {
    const fetchLocation = getLocationByName(value);
    setSelectedLocation({ ...fetchLocation });
  }, 500);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    doSearch(value);
  };

  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
          <input
            className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
            type="search"
            placeholder="Search Location"
            required
            value={searchTerm}
            onChange={handleChange}
          />
          <button type="submit">
            <img src={searchLogo} alt="Search" />
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;
