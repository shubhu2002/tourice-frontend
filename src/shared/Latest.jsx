import { Link } from "react-router-dom";

const Latest = () =>{
    return(<div className="w-32 h-32 fixed bottom-5 right-5 flex justify-center items-center flex-col rounded-full bg-rose-700 border-2 border-white z-50">
        <span className=" w-24 text-center text-xs font-Poppins mt-2">Rainy Season Is Here !!</span>
        <Link to="/tour/64d7b7104a5c02ef7eea494b" className="text-sm pt-1 latestBook">Book Now </Link>
    </div>)
};

export default Latest;