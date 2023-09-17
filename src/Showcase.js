import NavBar from "./NavBar";
import "./styles/Home.css";
import "./styles/Showcase.css";
import {useState} from "react";

const Showcase = () => {
    const [portfolio, setPortfolio] = useState(false);
    const [firstArray, setFirstArray] = useState([]);

    return (
        <div>
            <NavBar></NavBar>

            <div className="center-button" onClick={() => setPortfolio(true)}>
                <button>Get your portfolio</button>
            </div>

            {portfolio !== false ? <div>
                <h1 className="result-title">Here is your portfolio which protects the environment</h1>

                <div className="result">
                    <div>
                        <div className="result-1">
                            <h2>Stock</h2>
                            
                            <h2>Shares</h2>
                        </div> 

                        <h2>Hola</h2>

                        <h2>Gon</h2>
                    </div>
                    

                    <div className="result-2">
                        <h2>Your expected return is: </h2>
                    </div> 
                </div>

                </div> : <div></div>
            }
        </div>
    );
}

export default Showcase;