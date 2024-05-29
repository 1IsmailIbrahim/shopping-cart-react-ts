import React from "react";
import { IProduct } from "../interface";
import Button from "./ui/Button";
import { useAppDispatch } from "../app/store";
import { addItemToCart } from "../app/features/cart/cartSlice";
import ShoppingCartIcon from "./ShoppingCartIcon";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, title, price, thumbnail } = product;
  const dispatch = useAppDispatch();
  return (
    <div className="transition-transform transform hover:scale-105 mx-auto">
      <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
        <a
          className="relative mx-3 mt-3 flex items-center h-60 overflow-hidden rounded-xl"
          href="#"
        >
          <img
            className="object-cover"
            src={thumbnail}
            alt={`product ${id} image`}
          />
          <span className="absolute top-0 left-0 m-2 rounded-full bg-indigo-600 px-2 text-center text-sm font-medium text-white">
            39% OFF
          </span>
        </a>
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h5 className="text-xl tracking-tight text-gray-900">
              {title.length >= 20 ? `${title.slice(0, 20)}...` : title}
            </h5>
          </a>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-gray-900">${price}</span>
              <span className="text-sm text-gray-500 line-through">$79</span>
            </p>
          </div>
          <Button fullWidth onClick={() => dispatch(addItemToCart(product))}>
            <ShoppingCartIcon />
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
