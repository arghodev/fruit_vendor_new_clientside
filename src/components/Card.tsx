type CardProps = {
  title: string;
  img: JSX.Element;
  bg?: string;
};

const Card: React.FC<CardProps> = ({ title, img, bg }) => {
  return (
    <section className="py-10">
      <div
        className={`card  w-96 flex justify-center items-center border-2   ${bg} shadow-lg `}
      >
        <figure className="px-10 pt-10 ">{img}</figure>
        <div className="card-body">
          <h2 className="card-title font-Pacifico text-3xl font-normal ">
            {" "}
            {title}{" "}
          </h2>
        </div>
      </div>
    </section>
  );
};
export default Card;
