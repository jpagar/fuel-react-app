import {FC} from "react";

interface CardProps {
  title: string;
  alt: string;
  img: string;
  description: string;
  onClick?: () => void;
}

export const Card: FC<CardProps> = ({ title, img, alt, description, onClick }) => {
  return (
    <div className="mx-auto my-2 w-full lg:w-10/12">
      <div className="d-card bg-base-100 shadow-xl sm:d-card-side">
        <figure className="w-72 mx-auto">
          <img className="object-cover w-full" src={img} alt={alt} />
        </figure>
        <div className="d-card-body">
          <h2 className="d-card-title text-lg">{title}</h2>
          <p className="text-sm">{description}</p>
          {/*<select className="d-select d-select-bordered w-full max-w-xs">*/}
          {/*  <option>Select Amount</option>*/}
          {/*  <option>3.5g</option>*/}
          {/*  <option>7g</option>*/}
          {/*  <option>14g</option>*/}
          {/*  <option>28g</option>*/}
          {/*</select>*/}
          <div className="d-card-actions mt-2 justify-end">
            <button
                onClick={onClick}
                className="d-btn d-btn-primary text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
