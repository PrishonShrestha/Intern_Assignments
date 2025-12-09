import TopBrands from "../top_brands/TopBrands";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="video-container">
        <video
          src="https://images.puma.com/video/upload/f_auto:video,fl_keep_dar,w_2000/cms/videos/3281e81658bd9eee050605eb36d7e085b976f590?_a=BAMAMieA0"
          autoPlay
          loop
          muted
        ></video>

        <div className="top-brands">
          <TopBrands />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
