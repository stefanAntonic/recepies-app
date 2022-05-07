import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import logo from '../../images/logo.png';

// Here i need to make a sticky header that includes logo of the app and navlinks with certain food origin
function Category() {
  return (
    <div className="nav" id="nav-bar">
      <div className="logo-holder">
        <NavLink to={"/"}>
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <div className="nav-bar">
        <NavLink to={"/cuisine/italian"}>
          <FaPizzaSlice />
          <h4>Italian</h4>
        </NavLink>
        <NavLink to={"/cuisine/american"}>
          <FaHamburger />
          <h4>American</h4>
        </NavLink>
        <NavLink to={"/cuisine/thai"}>
          <GiNoodles />
          <h4>Thai</h4>
        </NavLink>
        <NavLink to={"/cuisine/japanise"}>
          <GiChopsticks />
          <h4>Japanise</h4>
        </NavLink>
      </div>
    </div>
  );
}

export default Category;
