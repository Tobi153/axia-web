import "./HeaderComponent.css";
import { Link } from "react-router-dom";
import axiaLogo from "../../images/axia.png";

export function Header() {
  return (
    <header className="header">
    <div className="main-nav">
      <div className="left-nav">
        <img src={axiaLogo} alt="AXIA logo" />
        <ul className="main-menu">
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/marketplace" className="marketplace">
              Marketplace
            </Link>
          </li>
        </ul>
      </div>
      <div className="right-nav">
        <ul className="user-menu">
          <li>
            <Link to="/login" className="login">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className="sign">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </div>
    </header>
  );
}
