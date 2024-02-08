import {ImageData} from "../../data";

const {booking,cc,custom,guide} = ImageData;

const SubService = (props) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`w-28 h-28 rounded-full flex justify-center items-center ${props.bg}`}
      >
        <img src={props.icon} alt="logos" width={65} />
      </div>
      <h1 className="w-28 text-center">
        {props.text}
      </h1>
    </div>
  );
};

const Service = () => {
  return (
    <section className="w-full flex items-center flex-col gap-12 py-2 mb-16">
      <div>
        <h1 className="text-3xl font-Borel">
          We Know Best For......
        </h1>
      </div>
      <div className="w-full lg:w-[80%] grid grid-cols-2 md:grid-cols-4 gap-y-9">
        <SubService
          icon={booking}
          text="Easy & Fast Booking"
          bg="bg-orange-200"
        />
        <SubService icon={guide} text="Best Guide" bg="bg-lime-200" />
        <SubService
          icon={custom}
          text="Extended Customization"
          bg="bg-orange-200"
        />
        <SubService icon={cc} text="Customer Care 24/7" bg="bg-lime-200" />
      </div>
    </section>
  );
};

export default Service;
