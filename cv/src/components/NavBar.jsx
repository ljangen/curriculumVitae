import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <div className="navbar-menu">
                <h2> <Link to="/">Christoffer Ljung</Link> </h2>
            <ul className="navbar-container">
                <li><Link to="/AboutMe">About Me</Link></li>
                <li><Link to="/MyProjects">My Projects</Link></li>
                <li><Link to="/ContactMe">Contact Me</Link></li>
            </ul>
        </div>
    );
}

export default NavBar;