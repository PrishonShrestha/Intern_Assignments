import ProductCard from "../../../../common/components/Cards/ProductCard/ProductCard";
import productList from "../../../../data/productList";

import "./ProductList.css";
import { useNavigate } from "react-router-dom";
const ProductList = () => {
  const navigate = useNavigate();
  return (
    <div className="product-list-container">
      {productList.map((product) => {
        return (
          <div
            onClick={() =>
              navigate(`/productDetail/${product.productID}`, {
                state: { product },
              })
            }
          >
            <ProductCard
              key={product.productID}
              productName={product.productName}
              productImage={product.imageUrl[0]}
              productPrice={product.productPrice}
              brandName={product.brandName}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
