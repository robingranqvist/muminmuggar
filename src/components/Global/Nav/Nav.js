import { Link } from "react-router-dom";

import "./Nav.css";

function Nav() {
  return (
    <div className="nav__wrapper">
      <div className="nav__brand">Muminmuggar</div>
      <div className="nav__menu">
        <div className="nav__item">
          <Link to="/">Hem</Link>
        </div>
        <div className="nav__item">
          <Link to="/">Muggar</Link>
        </div>
        <div className="nav__item">
          <Link to="/">Min samling</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
