import "./Navbar.css";
import logoMip from "../../assets/LOGO_MIP.png";
import { NavLink } from "react-router-dom";

function Navbar(){
    return (
        <nav>
            <div>
                <span>
                <NavLink to="/"><img src={logoMip} alt="Logo Maassen interim professionals"/></NavLink>
                </span>
            <ul>
            <li><NavLink to="/opdrachten" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>Opdrachten</NavLink></li>
            <li><NavLink to="/over-ons" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>Over ons</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>Contact</NavLink></li>
            </ul>
            </div>
        </nav>
    );
}
export default Navbar;