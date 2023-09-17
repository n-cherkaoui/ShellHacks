import NavBar from "./NavBar";
import FirstTable from "./FirstTable";
import "./styles/Home.css";
import "./styles/Showcase.css";
import {useState} from "react";
import Graph from "./images/graph.png";
import api from "./api";

const Showcase = () => {
    const [portfolio, setPortfolio] = useState(false);
    const [firstArray, setFirstArray] = useState([]);

    const fetchData = async () => {
        const response = await api.get("/stocks");
        console.log(response.data)
        setFirstArray(response.data)
        console.log(firstArray)
    };

    return (
        <div>
            <NavBar></NavBar>

            <div className="center-button" onClick={() => setPortfolio(true)}>
                <button onClick={fetchData}>Get your portfolio</button>
            </div>

            {portfolio !== false ? <div>
                <h1 className="result-title">Here is your portfolio which protects the environment</h1>

                <div className="result">
                    <div>
                        <div className="result-1">
                            <h2>Stock</h2>
                            
                            <h2>Shares</h2>
                        </div> 

                        {Object.entries(firstArray).map(([key, value]) => <FirstTable id={key} stockName={key} price={value}></FirstTable>)}
                    </div>
                    

                    <div className="result-2">
                        <img src={Graph} alt="graph" width="600px"></img>
                        <h2>Your expected return is: </h2>
                    </div> 
                </div>

                </div> : <div></div>
            }
        </div>
    );
}

export default Showcase;