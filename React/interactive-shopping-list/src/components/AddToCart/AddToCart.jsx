import React, { useEffect, useState } from "react";
import "./AddToCart.css";
import productData from "../../data/productData";
import { Snackbar } from "@mui/material";
import useSnackbar from "../../hooks/useSnackbar";
import useCartControls from "../../hooks/useCartControls";
import useComponentVisible from "../../hooks/useComponentVisible";

const AddToCart = () => {
  const { openSnackbar, snackbarMessage, showSnackbar, setOpenSnackbar } =
    useSnackbar();

  const {
    cartItems,
    setCartItems,
    addProductToCart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useCartControls();

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible();

  const [searchTerm, setSearchTerm] = useState("");
  const [grandTotal, setGrandTotal] = useState(0);

  // Calculate product total price
  const calculateProductTotal = () => {
    setCartItems((prev) =>
      prev.map((item) => ({
        ...item,
        productTotal: item.productPrice * item.quantity,
      }))
    );
  };

  // Calculate  grand total
  const calculateTotalPrice = () => {
    var grandTotal = cartItems.reduce(
      (total, item) => total + item.productTotal,
      0
    );
    setGrandTotal(grandTotal);
  };

  // Filtered data
  const filteredData = !searchTerm.trim()
    ? []
    : productData.filter(
        (item) =>
          item.productName.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
          item.productCategory.toLowerCase() === searchTerm.toLowerCase()
      );

  // Function to handle add to cart
  const handleAddToCart = (product) => {
    addProductToCart(product)
      ? showSnackbar(`${product.productName} added to a cart`)
      : alert("Product already exists on a cart");
    console.log("Product: " + product);
    setSearchTerm("");
  };

  // Function to handle increase quantity
  const handleIncreaseQuantity = (product) => {
    increaseQuantity(product);
  };

  // Function to handle decrease quantity
  const handleDecreaseQuantity = (product) => {
    decreaseQuantity(product);
  };

  // Handle clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Update product total
  useEffect(() => {
    calculateProductTotal();
  }, [cartItems.map((item) => item.quantity).join(",")]);

  // Update total price
  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems.map((item) => item.productTotal).join(",")]);

  return (
    <div className="main-container">
      <h1>Shopping cart</h1>
      <div ref={ref} className="search-container">
        <input
          type="text"
          value={searchTerm}
          placeholder="Search Products"
          onChange={(e) => setSearchTerm(e.target.value)}
          onClick={() => setIsComponentVisible(true)}
        />
        <button
          className="search-button"
          onClick={() => console.log(filteredData)}
        >
          Search
        </button>
        <button className="clear-cart-button" onClick={clearCart}>
          Clear cart
        </button>
        {/* Searched list  */}
        <div
          className={`search-list-container ${
            searchTerm.trim() && isComponentVisible ? "active" : ""
          }`}
        >
          <ul className="search-list">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <li key={index}>
                  <p>{item.productName} </p>
                  <span>${item.productPrice} </span>
                  <button
                    className="add-to-cart-button"
                    onClick={() => {
                      handleAddToCart(item);
                    }}
                  >
                    Add to Cart
                  </button>
                </li>
              ))
            ) : (
              <li>No search result</li>
            )}
          </ul>
        </div>
      </div>

      {/* Products on cart table*/}
      <div className="cart-list-container">
        <table>
          <thead>
            <tr>
              <th>S.N</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          {cartItems.length === 0 ? (
            <tbody>
              <tr>
                <td>No items in a cart</td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {cartItems
                .slice()
                .reverse()
                .map((product, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td className="product-container">
                      <img
                        className="product-image"
                        src={product.imageUrl}
                        alt="Product Image"
                      />
                      <div className="product-detail-container">
                        <h3>{product.productName}</h3>
                        <p>{product.productCategory}</p>
                        <span>${product.productPrice}</span>
                      </div>
                    </td>
                    <td>${product.productPrice}</td>
                    <td>
                      <div className="add-reduce-button-container">
                        <button
                          className="reduce-button"
                          onClick={() => handleDecreaseQuantity(product)}
                          disabled={null}
                        >
                          &#8722;
                        </button>
                        <span>{product.quantity}</span>
                        <button
                          className="add-button"
                          onClick={() => handleIncreaseQuantity(product)}
                          disabled={null}
                        >
                          &#43;
                        </button>
                      </div>
                    </td>
                    <td>
                      {/* <span>${CalculateProductTotal(product)}</span> */}
                      <span>${product.productTotal}</span>
                    </td>
                    <td>
                      <button
                        className="remove-item-button"
                        onClick={() => removeItem(product)}
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          )}
        </table>
        {/* Snackbar */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={() => setOpenSnackbar(false)}
          message={snackbarMessage}
        />
      </div>
      <div className="total-container">
        <span>Total Price: ${grandTotal}</span>
      </div>
    </div>
  );
};

export default AddToCart;
