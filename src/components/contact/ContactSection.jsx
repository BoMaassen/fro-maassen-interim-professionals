import './ContactSection.css'
import Button from "../../components/button/Button";
import Alink from "../../components/alink/Alink.JSX";
import { useNavigate } from "react-router-dom";

function ContactSection() {
    const navigate = useNavigate();

    return (
        <section className="contact">
            <h2>Contact ons</h2>
            <div className="contact-buttons">
                <Alink href="tel:0641000136" className="phone-number text-button blue equal alink" text="06-41000136" />
                <Button className="contact-button text-button purple equal" type="button" onClick={() => navigate(`/contact`)} text="Contact" />
            </div>
        </section>
    )
}
export default ContactSection;