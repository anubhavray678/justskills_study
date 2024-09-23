import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

const Nav = ({ handleInputChange, query, handleChange, placeholder }) => {
  return (
    <div className="nav">
      <input
        className="search-input dark:text-indigo-700"
        type="text"
        onChange={handleInputChange}
        value={query}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Nav;
