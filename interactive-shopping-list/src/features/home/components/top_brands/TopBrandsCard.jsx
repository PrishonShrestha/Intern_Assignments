import { useNavigate, useSearchParams } from "react-router-dom";
import "./TopBrandsCard.css";

const TopBrandsCard = ({ brandLogo, brandName }) => {
  const navigate = useNavigate();
  const [searchParam, setSearchParam] = useSearchParams();
  // Handle click
  const handleClick = (brandName) => {
    setSearchParam({ filter: brandName });
    navigate(`/searchedProducts?filter=${encodeURIComponent(brandName)}`);
  };
  return (
    <div className="card-container" onClick={() => handleClick(brandName)}>
      <img src={brandLogo} alt="Brand Logo" />
      <div>{brandName}</div>
    </div>
  );
};

export default TopBrandsCard;
