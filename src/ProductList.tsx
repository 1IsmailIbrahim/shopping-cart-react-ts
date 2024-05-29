import ProductCard from "./components/ProductCard";
import { IProduct } from "./interface";
import { useAppDispatch } from "./app/store";
import { getProductList, productsSelector } from "./app/products/productsSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductSkeleton from "./components/ui/ProductSkeleton";

const ProductList = () => {
  const dispatch = useAppDispatch();
  const { data, loading } = useSelector(productsSelector);
  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {Array.from({ length: 8 }, (_, idx) => (
          <ProductSkeleton key={idx} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
      {data?.products.map((product: IProduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
