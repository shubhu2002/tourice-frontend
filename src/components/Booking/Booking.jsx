import { IndianRupeeIcon, Star } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../hooks/config";

const Booking = ({ tour }) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  const { price, rating, title } = tour;
  const navigate = useNavigate();
  const [booking, setBooking] = useState({
    userId: "01",
    userEmail: "example@gmaiil.com",
    tourName: `${title}`,
    fullName: "",
    phone: "",
    guests: 0,
    date: "",
  });
  const handleChange = (event) => {
    setBooking((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/booking`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        // only include when user login credentials are available
        // credentials: "include",
        body: JSON.stringify(booking),
      });

      const result = await res.json();

      if (!res.ok) {
        return alert(result.messsage);
      }

      navigate("/booking-confirm");
    } catch (error) {
      alert(error.messsage);
    }
  };
  var serviceFee = booking.guests===0 ? 0 : 24 ;
  var totalAmount = Number(price) * Number(booking.guests) + Number(serviceFee);

  return (
    <>
      <div className="w-full flex flex-col border border-[rgba(109,107,107,0.49)] rounded-lg px-6 py-4">
        <div className="flex w-full justify-between">
          <h1 className="flex items-center text-xl">
            <IndianRupeeIcon size={20} /> {price}/- per person
          </h1>
          <span className="flex gap-1 items-center">
            <Star size={16} fill="yellow" stroke="orange" /> {rating}
          </span>
        </div>
        <h1 className="text-xl pt-7">Information</h1>
        <form className="flex flex-col gap-4 pt-3 " onSubmit={handleSubmit}>
          <div className="p-5 border border-inputBorder rounded-lg flex flex-col gap-4 ">
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={booking.fullName}
              required
              pattern="[a-zA-Z\s]+"
              className="bg-inherit border-b border-inputBorder outline-none py-2"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              value={booking.phone}
              required
              pattern="[0-9]{10}"
              title="Enter 10 digits Phone Number"
              className="bg-inherit border-b border-inputBorder outline-none py-2"
              onChange={handleChange}
            />
            <div className="flex w-full justify-between gap-2">
              <input
                type="date"
                min={`${year}-${month.toString().padStart(2, "0")}-${date
                  .toString()
                  .padStart(2, "0")}`}
                className="w-1/2 bg-inherit border-b border-inputBorder outline-none py-2 text-xs "
                name="date"
                value={booking.date}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                placeholder="Guests"
                name="guests"
                value={booking.guests}
                min="1"
                max={10}
                title="Enter not more than 10 persons"
                onChange={handleChange}
                required
                className="w-1/2 bg-inherit border-b border-inputBorder outline-none py-2 "
              />
            </div>
          </div>

          <div className="flex w-full justify-between pt-3 text-sm">
            <h1>
              Total Guests
            </h1>
            <span>{booking.guests}</span>
          </div>
          <div className="flex w-full justify-between border-b border-inputBorder  pb-2 text-sm">
            <h1>Service Charges*</h1>
            <span>₹ {serviceFee}</span>
          </div>
          <div className="flex w-full justify-between  font-extrabold">
            <h1 className=" ">Total</h1>
            <span>₹{totalAmount}</span>
          </div>
          <button className="md:px-7 py-2 text-base">Book Now</button>
        </form>
      </div>
    </>
  );
};

export default Booking;
