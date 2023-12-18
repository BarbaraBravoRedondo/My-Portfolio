import { Link } from "react-router-dom";

import "../styles/Header.scss";

function Header() {
  return (
    <header className="header">
      <Link className="link" to="/" title="ir a home">
        <p className='name'>Bárbara BR</p>
      </Link>

      <nav>
        <ul className="header__nav">
          <li>
            <Link className="link" to="/about-me" title="ir a sobre mí">
ABOUT
            </Link>
          </li>
          <li>
            <Link className="link" to="/" title="ir a proyectos">
              PROJECTS
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact" title="ir a contacto">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
Header.defaultProps = {};

Header.propTypes = {};
export default Header;
