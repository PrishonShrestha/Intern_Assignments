import { useEffect, useState } from "react";
import useAddToCart from "../../product_detail/hooks/useAddToCart";

const useCart = (cartItems, setCartItems) => {
  // const { cartItems, setCartItems } = useAddToCart();
  const [subTotal, setSubTotal] = useState(0);
  // Increase quantity
  const increaseQuantity = (product) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.productID === product.productID &&
        item.size === product.size &&
        item.quantity < 10
          ? {
              ...item,
              quantity: item.quantity + 1,
              productTotal: item.productPrice * (item.quantity + 1),
            }
          : item
      )
    );
  };

  // Decrease Quanitity
  const decreaseQuantity = (product) => {
    setCartItems(
      (prev) =>
        prev.map((item) =>
          item.productID === product.productID &&
          item.size === product.size &&
          item.quantity > 0
            ? {
                ...item,
                quantity: Math.max(1, item.quantity - 1),
                productTotal:
                  item.productPrice * Math.max(1, item.quantity - 1),
              }
            : item
        )
      // .filter((item) => item.quantity > 0)
    );
  };

  // Remove Item
  const removeItem = (product) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          item.productID !== product.productID || item.size !== product.size
      )
    );
  };

  //Calculate SubTotal
  const calculateTotal = () => {
    var subTotal = cartItems.reduce(
      (total, item) => total + item.productTotal,
      0
    );
    setSubTotal(subTotal);
  };

  // Update sub total
  useEffect(() => {
    calculateTotal();
  }, [cartItems.map((item) => item.quantity).join(",")]);

  return {
    // cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    // calculateSubTotal,
    subTotal,
  };
};

export default useCart;
