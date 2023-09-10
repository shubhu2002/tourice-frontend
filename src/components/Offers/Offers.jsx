import OfferCard from "./OfferCard";
import {ImageData} from "./../../data/imgData";

const {sbi,honeymoon2,hdfc,pilgrimage,kotak,bob} = ImageData;

const Offers = () => {
  return (
    <section className="w-full flex flex-col items-center py-12 my-12 bg-secondaryBG gap-7 " id="offer">
      <h1 className="text-3xl font-bold ">Get Exclusive Offers !!</h1>
      <div className="w-full flex flex-wrap justify-center gap-3 md:gap-10 px-4">
        <OfferCard
          imgSrc={sbi}
          text="Get 25% OFF through SBI Credit Card / EMI Card"
        />
        <OfferCard
          imgSrc={honeymoon2}
          text="Get Special Theme Offer of FLAT 30% "
        />
        <OfferCard
          imgSrc={hdfc}
          text="Get upto 30% OFF through HDFC Credit / Debit Card"
        />
        <OfferCard
          imgSrc={pilgrimage}
          text="Vaild Only for Grandparents , Flat 50% OFF !!"
        />
        <OfferCard
          imgSrc={kotak}
          text="Grab Flat 28% OFF on Holiday Packages "
        />
        <OfferCard imgSrc={bob} text="Avail Intrest FREE* EMI + Upto 35% OFF" />
      </div>
    </section>
  );
};

export default Offers;
