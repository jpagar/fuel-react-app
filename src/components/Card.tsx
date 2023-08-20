type CardProps = {
  title: string;
  alt: string;
  img: string;
  description: string;
};

export const Card = ({ title, img, alt, description }: CardProps) => {
  return (
    <div className="mx-auto my-2 w-11/12 lg:w-10/12">
      <div className="d-card bg-base-100 shadow-xl md:d-card-side">
        <figure className="w-64">
          <img className="" src={img} alt={alt} />
        </figure>
        <div className="d-card-body">
          <h2 className="d-card-title text-lg">{title}</h2>
          <p className="text-sm">{description}</p>
          <select className="d-select d-select-bordered w-full max-w-xs">
            <option>Select Amount</option>
            <option>3.5g</option>
            <option>7g</option>
            <option>14g</option>
            <option>28g</option>
          </select>
          <div className="d-card-actions mt-2 justify-end">
            <button className="d-btn d-btn-primary text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
