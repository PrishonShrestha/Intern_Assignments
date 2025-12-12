import CartPage from "./features/Cart/pages/CartPage";
import HomePage from "./features/Home/pages/HomePage";
import ProductDetail from "./features/ProductDetail/pages/ProductDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchedProducts from "./features/SearchedProducts/pages/SearchedProducts";
import Layout from "./common/layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="cart" element={<CartPage />} /> */}
          <Route path="productDetail/:id" element={<ProductDetail />} />{" "}
          <Route path="searchedProducts" element={<SearchedProducts />} />{" "}
        </Route>
        <Route path="cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <>
  //         <Navbar /> <HomePage />
  //         {/* <HomePage /> */}
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/cart",
  //     element: (
  //       <>
  //         <CartPage />
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/productDetail/:id",
  //     element: (
  //       <>
  //         <Navbar /> <ProductDetail />
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/searchedProducts",
  //     element: (
  //       <>
  //         <Navbar /> <SearchedProducts />
  //       </>
  //     ),
  //   },
  // ]);
  // return (
  //   <>
  //     {/* <Navbar /> */}
  //     <RouterProvider router={router} />
  //     {/* <HomePage /> */}
  //     {/* <CartPage /> */}
  //     {/* <ProductDetail /> */}
  //   </>
  // );
};

export default App;
