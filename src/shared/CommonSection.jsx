import img2 from "../data/assets/img2.jpg"

const CommonSection = ({title}) =>{
return(
    <section className="w-full relative mb-10">
        <h1 className="text-5xl text-lime-50 tracking-widest mt-8 font-Borel absolute z-40 text-center  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{title}</h1>
        <img src={img2} alt="" className="w-full h-80 object-cover bg-center px-1 brightness-50"/>
    </section>
)
};

export default CommonSection;