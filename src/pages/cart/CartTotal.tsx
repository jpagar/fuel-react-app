
type CartTotalProps = {
    total: string;
};
export const CartTotal = ({total}:CartTotalProps) => {
  return (
    <div className="flex w-full flex-col rounded bg-gray-100 px-6 py-2">
      <h3 className="my-2">Order Summary</h3>
      <div className="flex justify-between">
        <p className="text-gray-500">Total</p>
        <p className="text-sm">${total}</p>
      </div>
    </div>
  );
};
