import { Headset, Leaf, Truck } from "lucide-react";
import Card from "../../components/Card";
import HeroSection from "./HeroSection";

import "./../../index.css";

const HomePage = () => {
  return (
    <div className="custom-scroll">
      <HeroSection />
      <section className="">
        <div className="flex gap-3 justify-evenly items-center bg-[#f2fcf4] py-5 my-10 ">
          <Card
            title="100% Fresh & Organic"
            img={<Leaf className="size-24" />}
            bg={
              "text-light-green bg-light-green/10 border-light-green hover:motion-preset-bounce  "
            }
          />
          <Card
            title="24/7 Online Service"
            img={<Headset className="size-24" />}
            bg={
              "text-light-pink bg-light-pink/10 border-light-pink hover:motion-preset-bounce"
            }
          />
          <Card
            title="On Time Delivery"
            img={<Truck className="size-24" />}
            bg={
              "text-extra-orange bg-extra-orange/10  border-extra-orange hover:motion-preset-bounce"
            }
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
