import { useNavigate } from "react-router-dom";
import "./CartPage.css";
import useCart from "../hooks/useCart";
import useAddToCart from "../../product_detail/hooks/useAddToCart";
import BasicButton from "../../../common/components/buttons/BasicButton";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useAddToCart();

  const { increaseQuantity, decreaseQuantity, removeItem, subTotal } = useCart(
    cartItems,
    setCartItems
  );

  // Handle Quantity increase
  const handleQuantityIncrease = (product) => {
    increaseQuantity(product);
  };

  // Handle Decrease quantity
  const handleQuantityDecrease = (product) => {
    decreaseQuantity(product);
  };

  // Delivery Charge
  const deliveryCharge = 10;
  return (
    <div className="cart-page-container">
      {/* Close button */}
      <div className="close-button" onClick={() => navigate(-1)}>
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          stroke="black"
          strokeWidth="1"
          fill="none"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
      <div className="left-container">
        <h2>Cart</h2>
        {/* Cart Items */}
        {cartItems.length > 0 &&
          cartItems.map((product) => {
            return (
              <div className="cart-list">
                <div className="cart-list_left">
                  <img src={product.imageUrl[0]} alt="Product Image" />
                  <div className="button-container">
                    <div className="increase-decrease-button-container">
                      <button onClick={() => handleQuantityDecrease(product)}>
                        <FaMinus />
                      </button>
                      <span>{product.quantity}</span>
                      <button onClick={() => handleQuantityIncrease(product)}>
                        <FaPlus />
                      </button>
                    </div>
                    <button
                      className="trash-button"
                      onClick={() => removeItem(product)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
                <div className="cart-list_mid">
                  <h4>{product.productName}</h4>
                  <p>{product.brandName}</p>
                  <p>{product.productCategory}</p>
                  <p>Size: {product.size}</p>
                </div>
                <div className="cart-list_right">
                  <span>${product.productTotal}</span>
                </div>
              </div>
            );
          })}
        {/* <div className="cart-list">
          <div className="cart-list_left">
            <img
              src="https://imgs.search.brave.com/InMT1VmKml7fDvmWWoHjCkpPbTEIebdzKMqBaDlksvA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMy8w/NS8xOC8wNS81My9z/bmVha2Vycy04MDAx/Mzk0XzY0MC5qcGc"
              alt="Product Image"
            />
            <div className="button-container">
              <button>-</button>
              <span>10</span>
              <button>+</button>
            </div>
          </div>
          <div className="cart-list_mid">
            <h4>Nike</h4>
            <p>Brand Name</p>
            <p>Category</p>
          </div>
          <div className="cart-list_right">
            <span>$100.00</span>
          </div>
        </div> */}
      </div>
      <div className="right-container">
        <h2>Summary</h2>
        <div className="summary-list">
          <div>Subtotal</div>
          <span>${subTotal}</span>
        </div>
        <div className="summary-list">
          <div>Shipping Charge</div>
          <span>${deliveryCharge}</span>
        </div>
        <hr />
        <div className="summary-list total">
          <div>Total</div>
          <span>${subTotal + deliveryCharge}</span>
        </div>
        <hr />

        <BasicButton buttonTitle="Check Out" />
      </div>
    </div>
  );
};

export default CartPage;
