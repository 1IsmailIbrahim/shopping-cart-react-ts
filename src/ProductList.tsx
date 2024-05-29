import ProductCard from "./components/ProductCard";
import { IProduct } from "./interface";

import ProductSkeleton from "./components/ui/ProductSkeleton";
import { useGetProductListQuery } from "./app/products/productsSlice";

const ProductList = () => {
  const { isLoading, data } = useGetProductListQuery({});

  if (isLoading) {
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
