import "./styles/Home.css"
import Green from "./images/green.png";
import Companies from "./images/companies.png";
import {Link} from "react-router-dom" 

const Home = () => {
    return (
        <div>
            <div className="home-image">
                <div className="two-header">
                    <div className="left-home-logo">
                        <img src={Green} width="80px" alt="zcp-symbol"></img>
                        <h1>VerdeVentures</h1>
                    </div>

                    <div className="navButtons">
                        <a href="#the-intros">About</a>
                        <Link to="/show">Program</Link>
                        <Link to="/contact">Credits</Link>
                    </div>
                </div>

                <div className="home-title">
                    <h1>Trade For a Greener Tomorrow</h1>
                </div>

                <div className="secondLiner">
                    <h2>Harnessing the power of Machine Learning, our platform meticulously curates <br></br>
                        and manages a portfolio exclusively featuring companies committed to a <br></br>
                        carbon-zero footprint.</h2>
                </div>

            </div>

            <div className="intro-titles" id="the-intros">
                <h1>Empower Your Portfolio, <br></br>
                Empower the Planet: Trade <br></br>
                Carbon-Zero Stocks.</h1>

                <h2>
                    Using advanced machine learning algorithms and web scraping <br></br>
                    techniques, our project: "VerdeVentures" is a dynamic portfolio <br></br>
                    managenet system tailored for the concious investor. It continuously <br></br>
                    monitors, and validates stocks from companies that have either<br></br>
                    pledged or achieved a carbon-zero footprint. <br></br>
                    By bringing together vast data streams and analyzing corporate <br></br>
                    sustainability commitments, VerdeVentures ensures your investments <br></br>
                    align with a greener future.
                </h2>
            </div>

            <img src={Companies} className="companies" alt="eco_friendly_companies"></img>

            <h1 className="last-statement">
                VerdeVentures aims to not only incentivize the support<br></br>
                for companies that aim to help our environment<br></br>
                by minimizing the impact in the areas of carbon, water<br></br>
                and waste, but it also incentizes your finances to<br></br>
                grow with them. 
            </h1>

            <h2 className="question">Are you ready to join us in our cause?</h2>
            
            <Link to="/show">
            <div className="center-button extra-bottom-margin">
                
                <button>Try it out!</button>
                
            </div>
            </Link>
        </div>
    );
}

export default Home;