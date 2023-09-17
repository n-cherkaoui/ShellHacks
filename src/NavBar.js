import "./styles/NavBar.css"
import "./styles/Home.css"
import Green from "./images/verde_logo.png"
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <div className="nav-box">
            <div className="left-home-logo">
                <img src={Green} width="300px" alt="zcp-symbol"></img>
            </div>

            <div className="navButtons">
                <Link to="/">About</Link>
                <Link to="/show">Program</Link>
                <Link to="/contact">Credits</Link>
            </div>
        </div>
    );
}

export default NavBar;