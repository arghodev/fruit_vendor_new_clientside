import img from "../../assets/product_1.png";

const HomePage = () => {
  return (
    <>
      <section className="  ">
        <div>
          <p>
            Bringing Nature's Finest to Your Plate. Fresh, Flavorful, and
            Fantastic Fruits!
          </p>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </section>
    </>
  );
};

export default HomePage;
