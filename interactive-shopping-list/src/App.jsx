import Navbar from "./common/layout/navbar/Navbar";
import CartPage from "./features/cart/pages/CartPage";
import HomePage from "./features/home/pages/HomePage";
import ProductDetail from "./features/product_detail/pages/ProductDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchedProducts from "./features/searched_products/pages/SearchedProducts";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar /> <HomePage />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <CartPage />
        </>
      ),
    },
    {
      path: "/productDetail/:id",
      element: (
        <>
          <Navbar /> <ProductDetail />
        </>
      ),
    },
    {
      path: "/searchedProducts",
      element: (
        <>
          <Navbar /> <SearchedProducts />
        </>
      ),
    },
  ]);
  return (
    <>
      {/* <Navbar /> */}
      <RouterProvider router={router} />
      {/* <HomePage /> */}
      {/* <CartPage /> */}
      {/* <ProductDetail /> */}
    </>
  );
};

export default App;
