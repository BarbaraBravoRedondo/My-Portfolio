import { Link } from 'react-router-dom';
import LOGO from'../images/Beige Classy Modern Initials Name Logo (4).png'
import  ThemeToggle from './ThemeToggle';
import '../styles/App.scss'


import '../styles/Header.scss';

function Header() {
  return (
    <header className="header">
      <Link className="linkNav" to="/" title="ir a home">
        <img  src={LOGO}alt="" className='LOGO'/>
      </Link>

      <nav>
        
        <ul className="header__nav">
          <li>
            <Link className="link" to="/about" title="ir a sobre mí">
              ABOUT
            </Link>
          </li>
          <li>
            <Link className="link" to="/projects" title="ir a proyectos">
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
      <div> <ThemeToggle /></div>
    </header>
  );
}

export default Header;
