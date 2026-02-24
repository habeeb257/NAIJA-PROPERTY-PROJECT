import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

   const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <div className="container header-content">
        <div className="logo">
          <h1>Luxury RENTALS</h1>
        </div>

        <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
          ☰
        </div>

        <nav className={showMenu ? "nav show" : "nav"}>

          <Link to="/">home</Link>
          <Link to="/villas">villas</Link>
          <Link to="/about">about</Link>
          <Link to="/contact">contact </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
