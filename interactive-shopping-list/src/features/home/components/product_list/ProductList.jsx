import ProductCard from "../../../../common/components/cards/product_card/ProductCard";
import productList from "../../../../data/productList";

import "./ProductList.css";
import { useNavigate } from "react-router-dom";
const ProductList = () => {
  const navigate = useNavigate();
  return (
    <div className="product-list-container">
      {productList.map((product, index) => {
        return (
          <div
            onClick={() =>
              navigate(`/productDetail/${product.productID}`, {
                state: { product },
              })
            }
          >
            <ProductCard
              key={index}
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
