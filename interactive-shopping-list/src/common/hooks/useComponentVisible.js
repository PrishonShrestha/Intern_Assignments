import { useEffect, useRef, useState } from "react";

const useComponentVisible = () => {
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isComponentVisible]);

  return { ref, isComponentVisible, setIsComponentVisible };
};
export default useComponentVisible;
