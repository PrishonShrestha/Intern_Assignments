import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "./Navbar.css";
import SearchList from "./SearchList";
import { useState } from "react";
import productList from "../../../data/productList";
import useComponentVisible from "../../hooks/useComponentVisible";
import useAddToCart from "../../../features/ProductDetail/hooks/useAddToCart";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [fullScreenSearchOpen, setFullScreenSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { cartItems } = useAddToCart();
  // const { ref, isComponentVisible, setIsComponentVisible } =
  //   useComponentVisible();
  const largeScreenComponentVisible = useComponentVisible();
  const smallScreenComponentVisible = useComponentVisible();

  // Filter data
  const filteredData = !searchTerm.trim()
    ? []
    : productList.filter(
        (item) =>
          item.productName.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
          item.productCategory.toLowerCase() === searchTerm.toLowerCase() ||
          item.brandName.toLowerCase() === searchTerm.toLowerCase()
      );

  // Handle search
  const handleSearch = () => {
    setSearchParams({ filter: searchTerm });
    navigate(`/searchedProducts?filter=${encodeURIComponent(searchTerm)}`, {
      replace: true,
    });
    largeScreenComponentVisible.setIsComponentVisible(false);
    smallScreenComponentVisible.setIsComponentVisible(false);
    setFullScreenSearchOpen(false);
  };

  // Handle search (Enter key )
  const handleSearchOnKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearchParams({ filter: searchTerm });
      navigate(`/searchedProducts?filter=${encodeURIComponent(searchTerm)}`, {
        replace: true,
      });
      largeScreenComponentVisible.setIsComponentVisible(false);
      smallScreenComponentVisible.setIsComponentVisible(false);
      setFullScreenSearchOpen(false);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <div className="nav-container">
        <div className="logo" onClick={() => navigate("/", { replace: true })}>
          Logo
        </div>

        {/* Search field */}
        <div ref={largeScreenComponentVisible.ref} className="search-box">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onClick={() =>
              largeScreenComponentVisible.setIsComponentVisible(true)
            }
            onKeyDown={(e) => handleSearchOnKeyPress(e)}
          />
          <button onClick={() => handleSearch()}>
            <CiSearch />
          </button>
        </div>
        {/* Right nav  */}
        <div className="right-nav">
          <div
            className="full-screen-search-open-button"
            onClick={() => setFullScreenSearchOpen(true)}
          >
            <CiSearch />
          </div>
          <div className="cart-container">
            <Link className="cart" to="/cart">
              <IoCartOutline />
            </Link>

            <div className="cart-items-count">{cartItems.length}</div>
          </div>
        </div>

        {/* Full screen Search Field */}
        {fullScreenSearchOpen && (
          <div
            ref={smallScreenComponentVisible.ref}
            className="full-screen-search-box"
          >
            <button
              className="search-close-button"
              onClick={() => setFullScreenSearchOpen(false)}
            >
              <IoMdClose />
            </button>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={() =>
                smallScreenComponentVisible.setIsComponentVisible(true)
              }
              onKeyDown={(e) => handleSearchOnKeyPress(e)}
            />
            <button className="search-button" onClick={() => handleSearch()}>
              <CiSearch />
            </button>
          </div>
        )}
      </div>

      {/* Search List */}
      <div
        className={`search-list ${
          searchTerm.trim() ? "active-search-list" : ""
        }`}
      >
        {largeScreenComponentVisible.isComponentVisible ? (
          filteredData.length > 0 ? (
            <SearchList filteredData={filteredData} />
          ) : (
            <div className="no-result">No result found</div>
          )
        ) : null}

        {smallScreenComponentVisible.isComponentVisible ? (
          filteredData.length > 0 ? (
            <SearchList filteredData={filteredData} />
          ) : (
            <div className="no-result">No result found</div>
          )
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
