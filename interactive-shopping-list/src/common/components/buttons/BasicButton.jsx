import "./BasicButton.css";

const BasicButton = ({ onClick, buttonTitle, maxwidth = "300px" }) => {
  return (
    <div
      className="basic-button"
      onClick={onClick}
      style={{ maxWidth: maxwidth }}
    >
      {buttonTitle}
    </div>
  );
};

export default BasicButton;
