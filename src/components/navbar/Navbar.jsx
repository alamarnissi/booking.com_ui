import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo"><Link to="/">Booking Way</Link></span>
            <div className="navItems">
                <div className="leftSide"></div>
                <div className="rightSide">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}
