import HeroSection from "../components/hero_section/HeroSection";
import ProductList from "../components/product_list/ProductList";
import "./HomePage.css";

const HomePage = () => {
  return (
    // <AddedNotificationCard />
    <div className="home-page-container">
      {/* <Navbar /> */}
      <HeroSection />

      <ProductList />
    </div>
  );
};

export default HomePage;
