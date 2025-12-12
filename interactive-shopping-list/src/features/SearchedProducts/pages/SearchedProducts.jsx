import { useNavigate, useSearchParams } from "react-router-dom";
import productList from "../../../data/productList";
import ProductCard from "../../../common/components/Cards/ProductCard/ProductCard";
import "./searchedproducts.css";

const SearchedProducts = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const param = searchParams.get("filter").toLowerCase();
  // console.log(param);

  const searchedData = productList.filter(
    (product) =>
      product.productName.toLowerCase().startsWith(param) ||
      product.productCategory.toLowerCase() === param ||
      product.brandName.toLowerCase() === param
  );

  return (
    <div className="searched-product-container">
      {searchedData.map((product, index) => {
        return (
          <div onClick={() => navigate(`/productDetail/${product.productID}`)}>
            <ProductCard
              key={index}
              productName={product.productName}
              productImage={product.imageUrl[0]}
              productPrice={product.productPrice}
              brandName={product.brandName}
              width="300px"
            />
          </div>
        );
      })}
    </div>
  );
};

export default SearchedProducts;
