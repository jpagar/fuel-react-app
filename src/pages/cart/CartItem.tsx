type CartItemProps = {
  name: string;
  price: string;
  description: string;
  image: string;
};

export const CartItem = ({
  name,
  image,
  price,
  description,
}: CartItemProps) => {
  return (
    <li className="h-1/12 mx-2 mt-3 flex border-t border-gray-300 py-2">
      <div className="w-4/12">
        <img src={image} alt="" />
      </div>
      <div className="mx-2 my-1 w-full">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold">{name}</h3>
            <p className="text-sm">{description}</p>
          </div>
          <p>${price}</p>
        </div>
        <div className="mt-4 flex">
          <select className="text-sm md:text-base rounded border border-solid border-gray-300 px-4 py-1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>
      </div>
    </li>
  );
};
