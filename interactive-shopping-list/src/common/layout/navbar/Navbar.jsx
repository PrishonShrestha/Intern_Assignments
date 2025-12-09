import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import "./Navbar.css";
import SearchList from "./SearchList";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import productList from "../../../data/productList";
import useComponentVisible from "../../hooks/useComponentVisible";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible();

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
    setIsComponentVisible(false);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="nav-container">
        <div className="logo" onClick={() => navigate("/", { replace: true })}>
          Logo
        </div>
        <div ref={ref} className="search-box">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onClick={() => setIsComponentVisible(true)}
          />
          <button onClick={() => handleSearch()}>Search</button>
        </div>
        <div>
          <NavLink
            className={(e) => {
              return e.isActive ? "active-cart" : "cart";
            }}
            to="/cart"
          >
            <FaShoppingCart />
          </NavLink>
        </div>
      </div>

      {/* Search List */}
      <div
        className={`search-list ${
          searchTerm.trim() ? "active-search-list" : ""
        }`}
      >
        {isComponentVisible ? (
          filteredData.length > 0 ? (
            <SearchList filteredData={filteredData} />
          ) : (
            <div>No result found</div>
          )
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
