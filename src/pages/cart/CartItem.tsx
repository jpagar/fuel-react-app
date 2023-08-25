type CartItemProps = {
  name: string;
  price: string;
  description: string;
  image: string;
  quantity?: number;
  onClick?: () => void;
};

export const CartItem = ({
  name,
  image,
  price,
  description,
  quantity,
  onClick,
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
          <p className="flex gap-1">
            <span>${price}</span><span>{quantity ? `- ${quantity}x` : null}</span>
          </p>
        </div>
        <div className="mt-4 flex gap-6">
          <select className="rounded border border-solid border-gray-300 px-4 py-1 text-sm md:text-base">
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

          {/*TODO: Add a modal to ask user to confirm if they want to remove items from cart*/}
          <button onClick={onClick} className="bg-red-300 px-2 py-0.5 rounded cursor-pointer">
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};
