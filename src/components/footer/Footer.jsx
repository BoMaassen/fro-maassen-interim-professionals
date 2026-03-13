import "./Footer.css"
import logoMip from "../../assets/LOGO_MIP.png";
import { Link } from 'react-router-dom'
import assingments from "../../../src/assignments.json"

function Footer(){
    return(
        <div>
        <footer>
         <span className="footer-logo"><Link to="/"><img src={logoMip} alt="Logo Maassen interim professionals"/></Link></span>
         <div>
          <h4><Link to="/">Maassen interim professionals</Link></h4>
          <ul>
          <li>Kvk 123456789</li>
          <li>Molenhoekplein 43</li>
          <li>6675BZ Valburg</li>
          </ul>
         </div>
         <div>
          <h4><Link to="/over-ons">Over ons</Link></h4>
          <ul>
          <li><Link to="/over-ons" className="afooter">Wie we zijn</Link></li>
          <li><Link to="/over-ons" className="afooter">Wat we doen</Link></li>
          </ul>
         </div>
         <div>
          <h4><Link to="/opdrachten">Opdrachten</Link></h4>
          <ul>
          {assingments
                    .filter((assignment) => assignment.highlight === true)
                    .map((assignment) => ( 
                        <li key={assignment.id}><Link to={`/opdracht/${assignment.id}`} className="afooter">{assignment.title}</Link></li>
                    ))}
          </ul>
         </div>
         <div>
          <h4><Link to="/contact">Contact</Link></h4>
          <ul>
          <li><a href="tel:0641000136" className="afooter">06-41000136</a></li>
          <li><a href="mailto:info@maasseninterimprofessionals.nl" className="afooter">info@maasseninterim<br></br>professionals.nl</a></li>
          </ul>
         </div>
        </footer>
        <div className="footnote"><p>@2026 - Maassen interim professionals</p></div>
        </div>
    );
}

export default Footer;