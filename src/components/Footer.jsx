import { Link } from 'react-router-dom';
import '../styles/Footer.scss';
import NavFooter from './NavFooter';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__items"></div>
      <Link className="link footer__items" to="/" title="ir a home">
        <h2 className="footer__title font-sm">Front-end Developer</h2>
      </Link>
      <NavFooter />
    </footer>
  );
}
Footer.defaultProps = {};

Footer.propTypes = {};
export default Footer;
