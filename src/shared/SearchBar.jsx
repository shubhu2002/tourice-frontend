import { MapPin, Search } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../hooks/config";
import { ArrowRight } from "lucide-react";
import useFetch from "../hooks/useFetch";
import { Bars } from "react-loader-spinner";

const SearchBar = () => {
  const { data: tourData, loading, error } = useFetch(`${BASE_URL}/tours/`);
  const [isOpen, setIsOpen] = useState(false);
  const locationRef = useRef("");

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-5/6 md:w-3/6 bg-white relative dark:bg-[rgba(0,0,0,0.8)] flex flex-row justify-between rounded-lg mt-4 text-sm p-1">
      <div className="w-full gap-6 items-center px-4 py-3 flex">
        <MapPin color="#34d399" />
        <input
          type="text"
          ref={locationRef}
          required
          placeholder="Where You Want To Go....."
          className="w-full outline-none bg-transparent tracking-widest"
          readOnly
          onClick={toggleOptions}
        />
        <ArrowRight />
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-[100%] h-44 absolute top-16 left-0 right-0 bg-white dark:bg-[rgba(0,0,0,0.8)] rounded-lg overflow-y-scroll`}
      >
        {loading && (
          <div className="w-full h-full flex items-center justify-center">
            <Bars
              height="42"
              width="42"
              color="rgb(255,255,255,0.5)"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        )}
        {error && (
          <h1 className=" h-full text-xl capitalize font-mono flex items-center justify-center">
            {error}
          </h1>
        )}
        {tourData.map((item) => (
          <Link
            to={`/tour/${item._id}`}
            key={item._id}
            className="list-none text-lg flex justify-center py-2 hover:bg-white/10"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
