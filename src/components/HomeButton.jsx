
import { Link, useLocation } from 'react-router-dom';
import '../styles/HomeButton.scss';

const HomeButton = () => {
  const location = useLocation();

  
  const showButton = ['/about', '/projects', '/contact'].includes(location.pathname);

  if (!showButton) return null;

  return (
    <Link to="/" className="home-button"title='Go to Home page'>
      <i  className="fas fa-home"></i>
    </Link>
  );
};

export default HomeButton;
