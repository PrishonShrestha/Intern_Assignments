import "./TopBrands.css";
import TopBrandsCard from "./TopBrandsCard";

import brandList from "../../../../data/brandList";

const TopBrands = () => {
  return (
    <div className="top-brand-container">
      {brandList.map((brand, index) => {
        return (
          <TopBrandsCard
            key={index}
            brandName={brand.brandName}
            brandLogo={brand.brandLogo}
          />
        );
      })}
    </div>
  );
};

export default TopBrands;
