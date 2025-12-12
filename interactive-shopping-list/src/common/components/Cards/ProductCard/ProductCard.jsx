import "./ProductCard.css";

const ProductCard = ({
  productImage,
  productName,
  productPrice,
  brandName,
  width = "300px",
}) => {
  return (
    <div className="product-card-container" style={{ width: width }}>
      <div className="product-image" style={{ height: width }}>
        <img src={productImage} alt="Product Image" />
      </div>
      <h4>{productName}</h4>
      <p>{brandName}</p>
      <span>${productPrice}</span>
    </div>
  );
};

export default ProductCard;
