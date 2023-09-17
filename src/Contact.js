import NavBar from "./NavBar";
import "./styles/Contact.css";
import Photo1 from "./images/photo1.jpeg";
import Photo2 from "./images/photo2.jpeg";
import Photo3 from "./images/photo3.jpeg";
import Photo4 from "./images/photo4.jpeg";

const Contact = () => {
    return (
        <div>
            <NavBar></NavBar>

            <div className="contact-titles">
                <h1 className="first-title">Meet the team behind this hackathon project!</h1>
                <h2>And possibly contact us for opportunities</h2>
            </div>

            <div className="team">
                <div className="member">
                    <img src={Photo1}></img>
                    <h3>Nawfal Cherkaoui Elmalki</h3>
                    <p>Github</p>
                    <p>LinkedIn</p>
                </div>

                <div className="member">
                    <img src={Photo2}></img>
                    <h3>Santiago Acosta</h3>
                    <a href="https://github.com/santiago1595/">Github</a>
                    <p>LinkedIn</p>
                </div>

                <div className="member">
                    <img src={Photo3}></img>
                    <h3>Saul Espinoza Nalvarte</h3>
                    <a href="https://github.com/SaulEspinoza7">Github</a>
                    <p>LinkedIn</p>
                </div>

                <div className="member">
                    <img src={Photo4}></img>
                    <h3>George Doujaiji</h3>
                    <p>Github</p>
                    <p>LinkedIn</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;