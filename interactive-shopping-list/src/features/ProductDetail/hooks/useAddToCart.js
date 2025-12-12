import { useEffect, useState } from "react";

const useAddToCart = () => {
  const [cartItems, setCartItems] = useState(() => {
    const localData = localStorage.getItem("data");
    return localData ? JSON.parse(localData) : [];
  });

  // Check if product exists in cart
  const checkIfProductExists = (productID, size) => {
    return cartItems.some(
      (item) => item.productID === productID && item.size === size
    );
  };

  // Add product to cart
  const addProductToCart = (product, size) => {
    if (checkIfProductExists(product.productID, size)) return false;
    setCartItems((prev) => [
      ...prev,
      {
        ...product,
        quantity: 1,
        size: size,
        productTotal: product.productPrice,
      },
    ]);
    // localStorage.setItem("data", JSON.stringify(cartItems));

    return true;
  };

  // Add to local storage
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(cartItems));
  }, [cartItems]);

  //Add data to local storage
  // useEffect(() => {
  //   // if (cartItems.length !== 0) {
  //   localStorage.setItem("data", JSON.stringify(cartItems));
  //   // }

  //   console.log(
  //     "Local data after cartitem changes: " + localStorage.getItem("data")
  //   );
  //   console.log(cartItems);
  // }, [cartItems]);

  return {
    cartItems,
    setCartItems,
    addProductToCart,
    checkIfProductExists,
  };
};
export default useAddToCart;
