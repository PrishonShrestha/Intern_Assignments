import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import "./SearchList.css";
import { useNavigate } from "react-router-dom";

const SearchList = ({ filteredData }) => {
  const navigate = useNavigate();
  return (
    <div className="search-list-container">
      {filteredData.slice(0, 5).map((product, index) => {
        return (
          <div
            onClick={() =>
              navigate(`/productDetail/${product.productID}`, {
                replace: true,
              })
            }
          >
            <ProductCard
              key={index}
              productName={product.productName}
              productImage={product.imageUrl[0]}
              productPrice={product.productPrice}
              brandName={product.brandName}
              width="200px"
            />
          </div>
        );
      })}
    </div>
  );
};

export default SearchList;
