import NavBar from "./NavBar";
import "./styles/Home.css";
import "./styles/Showcase.css";
import {useState} from "react";

const Showcase = () => {
    const [portfolio, setPortfolio] = useState(false);
    
    return (
        <div>
            <NavBar></NavBar>

            <div className="center-button" onClick={() => setPortfolio(true)}>
                <button>Get your portfolio</button>
            </div>

            {portfolio !== false ? <div>
                <h1 className="result-title">Here is your portfolio which protects the environment</h1>

                <div className="result">
                    
                </div>  

                </div> : <div></div>
            }
        </div>
    );
}

export default Showcase;