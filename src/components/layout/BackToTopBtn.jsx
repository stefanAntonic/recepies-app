import { useState } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';


function BackToTopBtn() {
  const [visible, setVisible] = useState(false);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  const visibilitySet = () => {
    const getScrollTop = document.documentElement.scrollTop;
    if (getScrollTop > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", visibilitySet);

  return (
    <div className="back-top" style={{ display: visible ? "block" : "none" }}>
      <NavLink to={"#nav-bar"}>
        <BsFillArrowUpSquareFill onClick={backToTop} />
      </NavLink>
    </div>
  );
}

export default BackToTopBtn;
