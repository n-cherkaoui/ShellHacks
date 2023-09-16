import NavBar from "./NavBar";
import "./styles/Contact.css"

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
                    <h3>Nawfal Cherkaoui Elmalki</h3>
                    <p>Github</p>
                    <p>LinkedIn</p>
                </div>

                <div className="member">
                    <h3>Santiago </h3>
                    <p>Github</p>
                    <p>LinkedIn</p>
                </div>

                <div className="member">
                    <h3>Saul Espinoza Nalvarte</h3>
                    <p>Github</p>
                    <p>LinkedIn</p>
                </div>

                <div className="member">
                    <h3>George Doujaiji</h3>
                    <p>Github</p>
                    <p>LinkedIn</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;