import { useState } from "react";

const useCartControls = () => {
  const [cartItems, setCartItems] = useState([]);

  // Add product to a cart
  const addProductToCart = (product) => {
    console.log("Product........:" + product.productID);
    const checkIfProductExists = cartItems.find(
      (item) => item.productID === product.productID
    );
    if (checkIfProductExists) return false;

    setCartItems((prev) => [
      ...prev,
      { ...product, quantity: 1, productTotal: product.productPrice },
    ]);
    return true;
  };

  // Increase quantity
  const increaseQuantity = (product) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.productID === product.productID && item.quantity < 10
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease Quanitity
  const decreaseQuantity = (product) => {
    setCartItems(
      (prev) =>
        prev.map((item) =>
          item.productID === product.productID && item.quantity > 0
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item
        )
      // .filter((item) => item.quantity > 0)
    );
  };

  // Remove Item
  const removeItem = (product) => {
    console.log("......" + product.productID);
    setCartItems((prev) =>
      prev.filter((item) => item.productID !== product.productID)
    );
  };

  return {
    cartItems,
    setCartItems,
    addProductToCart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  };
};

export default useCartControls;
