import "./Navbar.css";
import logoMip from "../../assets/LOGO_MIP.png";
import { NavLink } from "react-router-dom";

function Navbar(){
    return (
        <nav>
            <div className="nav-wrapper">
                 <NavLink to="/"><span><img src={logoMip} alt="Logo Maassen interim professionals"/></span></NavLink>
                
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