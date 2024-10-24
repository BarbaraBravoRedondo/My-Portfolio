import '../styles/Footer.scss';

function NavFooter() {
  return (
    <ul className="footer__nav">
      <li>
        <a
          className="footerIcons"
          href="https://www.linkedin.com/in/barbara-bravo-redondo/"
          title="Go to Barbara's Website"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin-in fa-xs footer__nav__iconos"></i>
        </a>
      </li>
      <li>
        <a
          className="footerIcons"
          href="https://github.com/BarbaraBravoRedondo"
          title="Go to Barbara's GitHub"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github-alt fa-xs footer__nav__iconos"></i>
        </a>
      </li>
      <li>
        <a
          className="footerIcons"
          href="mailto:barbarabravoredondo@gmail.com@gmail.com"
          title="Send an email"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-solid fa-envelope fa-xs footer__nav__iconos "></i>
        </a>
      </li>
    </ul>
  );
}



export default NavFooter;
