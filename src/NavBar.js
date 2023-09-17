import "./styles/NavBar.css"
import "./styles/Home.css"
import Green from "./images/vLogo.png"
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <div className="nav-box">
            <div className="left-home-logo">
                <img src={Green} width="80px" alt="zcp-symbol"></img>
                <h1>VerdeVentures</h1>
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