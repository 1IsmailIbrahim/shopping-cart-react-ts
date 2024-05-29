import { useSelector } from "react-redux";
import {
  addItemToCart,
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
    <div>
      <div className="grid grid-cols-1 gap-2 md:gap-4 p-2 rounded-md mb-10">
        {cartItems.map((product) => (
          <div
            key={product.id}
            className="relative w-full overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
          >
            <div className="mt-4 px-5 pb-5 flex justify-between items-center">
              <div className="flex items-center">
                <a
                  className="relative mx-3 mt-3 flex h-40 w-60  overflow-hidden rounded-xl"
                  href="#"
                >
                  <img
                    className="w-full object-cover"
                    src={product.thumbnail}
                    alt={`product ${product.id} image`}
                  />
                </a>
                <div>
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
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-3">
                <span className="font-bold text-xl text-slate-900">
                  Quantity: {product.quantity}
                </span>
                <div className="space-x-2 flex items-center justify-between">
                  <button
                    className="font-bold text-2xl flex items-center justify-center h-10 w-10 border-2 border-gray-300 rounded-lg bg-white hover:bg-gray-100 focus:bg-gray-100 focus:outline-none cursor-pointer"
                    onClick={() => dispatch(removeItemToCart(product))}
                  >
                    -
                  </button>
                  <button
                    className="font-bold text-2xl flex items-center justify-center h-10 w-10 border-2 border-gray-300 rounded-lg bg-white hover:bg-gray-100 focus:bg-gray-100 focus:outline-none cursor-pointer"
                    onClick={() => dispatch(addItemToCart(product))}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-2xl font-bold ml-2 mt-4">
        Total Price: ${calculateTotalPrice().toFixed(2)}
      </div>
    </div>
  ) : (
    <h1 className="font-bold text-3xl">Cart is Empty</h1>
  );
};

export default Cart;
