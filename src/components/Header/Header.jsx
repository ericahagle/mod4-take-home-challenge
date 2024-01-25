import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <Link className='app-title-link' to='/'>
        <h1 className='app-title'>The Haps</h1>
      </Link>
    </header>
  );
};

export default Header;
