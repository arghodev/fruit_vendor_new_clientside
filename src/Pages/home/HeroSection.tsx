import img1 from "../../assets/product_1.png";
import img2 from "../../assets/product_2.png";
import img3 from "../../assets/product_3.png";
import img4 from "../../assets/product_4.png";
import img5 from "../../assets/product_5.png";

const HeroSection = () => {
  return (
    <section className="  flex items-center h-[80vh] mt-10">
      <div className=" flex-1 font-Pacifico text-5xl px-20 tracking-widest leading-[1.3em] ">
        <p className="text-deep-green">
          Bringing Nature's Finest to Your Plate.{" "}
          <span className="text-light-green">Fresh</span>,{" "}
          <span className="text-extra-orange ">Flavorful</span>, and{" "}
          <span className="text-light-pink">Fantastic</span> Fruits!
        </p>
      </div>
      <div className="flex-1  w-full h-full grid grid-cols-4 grid-rows-2 gap-3 px-10 py-32  ">
        <div className="b1 bg-light-pink col-span-2 rounded-xl overflow-hidden">
          <img src={img1} alt="" className="w-full object-cover h-full " />
        </div>
        <div className="b2 bg-light-green col-span-1 rounded-xl  overflow-hidden">
          <img src={img2} alt="" className="w-full object-cover h-full " />
        </div>
        <div className="b3 bg-warning row-span-2 col-span-1 rounded-xl overflow-hidden">
          <img src={img3} alt="" className="w-full object-cover h-full " />
        </div>
        <div className="b4 bg-secondary row-span-1 rounded-xl overflow-hidden">
          <img src={img4} alt="" className="w-full object-cover h-full " />
        </div>
        <div className="b5 bg-accent col-span-2 rounded-xl overflow-hidden">
          <img src={img5} alt="" className="w-full object-cover h-full " />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
