import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/navbar'
import About from './pages/about/About'
import Assignments from './pages/assignments/Assignments'
import Home from './pages/home/home'
import Contact from './pages/contact/Contact'
import logoMip from "./assets/LOGO_MIP.png";
import { Link } from 'react-router-dom'

function App() {
  const location = useLocation();

  const titles = {
    '/': 'Interim opdrachten voor professionals',
    '/over-ons': 'Over ons',
    '/contact': 'Contact ons',
    '/opdrachten': 'Opdrachten',
  };
  
  const getPageTitle = () => titles[location.pathname] || 'Pagina';

  return (
    <>
    <header>
      <Navbar/>
      <div className='header-content'>
      <h1>{getPageTitle()}</h1>
      </div>
    </header>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/over-ons' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/opdrachten' element={<Assignments/>}/>
      </Routes>
      <footer>
       <span className="footer-logo"><img src={logoMip} alt="Logo Maassen interim professionals"/></span>
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
          <li>Wie we zijn</li>
          <li>Wat we doen</li>
        </ul>
       </div>
       <div>
        <h4><Link to="/opdrachten">Opdrachten</Link></h4>
        <ul>
        <li>Interim manager 1</li>
        <li>Interim manager 2</li>
        <li>Interim manager 3</li>
        </ul>
       </div>
       <div>
        <h4><Link to="/contact">Contact</Link></h4>
        <ul>
        <li>06-41000136</li>
        <li>info@maasseninterim<br></br>professionals.nl</li>
        </ul>
       </div>
      </footer>
      <div className="footnote"><p>@2025 - Maassen interim professionals</p></div>
    </>
  )
}

export default App
