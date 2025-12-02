import { useEffect, useState } from "react";
import useCartControls from "./useCartControls";

const useLocalStorage = () => {
  const { cartItems } = useCartControls();

  const [localCartData, setLocalCartData] = useState([]);

  useEffect(() => {
    if (cartItems.length === 0) {
      const localData = localStorage.getItem("data");
      if (localData && localData.length !== 0) {
        setLocalCartData(JSON.parse(localData));
      }
    }
  }, [localCartData, setLocalCartData]);

  useEffect(() => {
    if (localCartData.length !== 0) {
      localStorage.setItem("data", JSON.stringify(cartItems));
    }
  }, [localCartData]);

  return { localCartData };
};

export default useLocalStorage;
