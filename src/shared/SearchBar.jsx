import { MapPin, Search } from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../hooks/config";

const SearchBar = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  const locationRef = useRef("");
  const navigate = useNavigate();

  const searchHandler = async (e) => {
    const location = locationRef.current.value;
    
    const res = await fetch(
      `${BASE_URL}/tours/search/getTourBySearch?title=${location}`
      );
      if (!res.ok) {
        alert("Something Went Wrong");
      }
      
      const result = await res.json();
    navigate(`/tour/search?title=${location}`, { state: result.data });

  };

  return (
    <div className="bg-white dark:bg-[rgba(0,0,0,0.3)] flex flex-col md:flex-row rounded-lg mt-4 text-sm p-1 border-2 border-borderClr">
      <div className="border-b-2 md:border-b-0 md:border-r-2 border-borderClr dark:border-borderClrDark pl-2 py-1">
        <h6 className="flex gap-1">
          <MapPin color="#34d399" /> Location
        </h6>
        <input
          type="text" 
          ref={locationRef}
          required
          placeholder="Where You Wants To Go..."
          className="w-72 md:w-52 outline-none bg-transparent "
        />
      </div>
      <div className="border-b-2 md:border-b-0 md:border-r-2 border-borderClr dark:border-borderClrDark pl-2 pr-2 py-1">
        <h6 className="flex gap-1">
          <MapPin color="#34d399" /> Date
        </h6>
        <input
          type="date"
          required
          id="date"
          min={`${year}-${month.toString().padStart(2, "0")}-${date
            .toString()
            .padStart(2, "0")}`}
          className="w-72 md:w-52 outline-none bg-inherit text-gray-400"
        />
      </div>
      <div className=" pl-2 py-1">
        <h6 className=" flex gap-1">
          <MapPin color="#34d399" /> Persons
        </h6>
        <input
          type="number"
          min="1"
          id="guests"
          required
          placeholder="Total Guests"
          className="w-72 md:w-52 outline-none bg-transparent"
        />
      </div>
      <button
        className="grid place-items-center rounded-lg"
        onClick={searchHandler}
      >
        <Search size={36} strokeWidth={1.5} color="#ffff" />
      </button>
    </div>
  );
};

export default SearchBar;
