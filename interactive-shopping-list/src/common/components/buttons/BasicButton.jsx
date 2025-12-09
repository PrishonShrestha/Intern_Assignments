import "./BasicButton.css";

const BasicButton = ({ onClick, buttonTitle }) => {
  return (
    <div className="basic-button" onClick={onClick}>
      {buttonTitle}
    </div>
  );
};

export default BasicButton;
