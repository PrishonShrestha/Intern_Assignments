import { useEffect, useState } from "react";
import useCartControls from "./useCartControls";

const useLocalStorage = () => {
  const { cartItems, setCartItems } = useCartControls();

  // Load data from local storage on first load
  useEffect(() => {
    console.log("Cart Items:" + cartItems.length);
    const localData = localStorage.getItem("data");

    if (localData && cartItems.length === 0) {
      const parsedData = JSON.parse(localData);
      //   setLocalCartData(parsedData);
      setCartItems(parsedData);
    }
  }, []);

  // Add data to local storage
  useEffect(() => {
    if (cartItems.length !== 0) {
      localStorage.setItem("data", JSON.stringify(cartItems));
    }

    console.log(
      "Local data after cartitem changes: " + localStorage.getItem("data")
    );
    console.log(cartItems);
  }, [cartItems]);
};

export default useLocalStorage;
