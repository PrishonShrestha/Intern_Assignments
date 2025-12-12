import "./Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiYoutube, FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const SocialMedia = ({ icon }) => {
  return <div className="social-media-icon">{icon}</div>;
};
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="contact-us">Contact Us</div>
      <div className="social-media">
        <SocialMedia icon={<FaInstagram />} />
        <SocialMedia icon={<FiYoutube />} />
        <SocialMedia icon={<FaXTwitter />} />
        <SocialMedia icon={<FiFacebook />} />
      </div>
    </div>
  );
};

export default Footer;
