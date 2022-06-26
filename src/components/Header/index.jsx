import Navigation from '../Navigation';
import './header.css';

/**
 *  Header with logo and navigation component
 * @returns (React.ReactElement)
 */

function Header() {
  return (
    <div className="header col-lg-12">
      <div className="logo col-lg-2">
        <img className="small-img" src="images/logo.jpg" alt="logo" />
      </div>
      <div className="col-lg-10">
        <Navigation />
      </div>
    </div>
  );
}

export default Header;
