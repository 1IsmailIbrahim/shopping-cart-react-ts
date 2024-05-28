import { useSelector } from "react-redux";
import {
  removeItemToCart,
  selectCartItems,
} from "../app/features/cart/cartSlice";
import { useAppDispatch } from "../app/store";

const Cart = () => {
  const { cartItems } = useSelector(selectCartItems);
  const dispatch = useAppDispatch();
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };
  return cartItems.length > 0 ? (
    <div className="grid grid-cols-1  gap-2 md:gap-4 p-2 rounded-md mb-10">
      {cartItems.map((product) => (
        <div
          key={product.id}
          className="relative flex w-full overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
        >
          <a
            className="relative mx-3 mt-3 flex h-36 w-60  overflow-hidden rounded-xl"
            href="#"
          >
            <img
              className="w-full object-cover"
              src={product.thumbnail} // Assuming thumbnail is a property of your product
              alt={`product ${product.id} image`}
            />
          </a>
          <div className="mt-4 px-5 pb-5">
            <a href="#">
              <h5 className="text-3xl font-bold tracking-tight text-slate-900">
                {product.title.length >= 20
                  ? `${product.title.slice(0, 20)}...`
                  : product.title}
              </h5>
            </a>
            <div className="mt-2 space-y-3 flex flex-col  justify-between">
              <p>
                <span className="text-2xl font-semiboldbold text-slate-900">
                  ${product.price}
                </span>
              </p>
              <div className="flex items-center space-x-3">
                <span className="text-1xl font-bold text-slate-900">
                  Quantity: {product.quantity}
                </span>
                <a className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className=" h-4 w-4 "
                    onClick={() => dispatch(removeItemToCart(product))}
                  >
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="text-2xl font-bold mt-4">
        Total Price: ${calculateTotalPrice().toFixed(2)}
      </div>
    </div>
  ) : (
    <h1 className="font-bold text-3xl">Cart is Empty</h1>
  );
};

export default Cart;
