import { Routes, Route, useLocation} from 'react-router-dom'
import { useState } from 'react';
import './App.css'
import Navbar from './components/navbar/navbar'
import About from './pages/about/About'
import Assignments from './pages/assignments/Assignments'
import Home from './pages/home/home'
import Contact from './pages/contact/Contact'
import Vacancy from './pages/vacancy/Vacancy.JSX'
import Footer from './components/footer/Footer';
import ScrollToTop from './components/scrollToTop/scrollToTop';

function App() {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");

  // Statische titels
  const titles = {
    '/': 'Interim opdrachten voor professionals',
    '/over-ons': 'Over ons',
    '/contact': 'Contact ons',
    '/opdrachten': 'Opdrachten',
  };

  // Kies de titel op basis van locatie, fallback naar state
  const getPageTitle = () => {
    if (location.pathname.startsWith("/opdracht/")) {
      return pageTitle || "Opdracht";
    }
    return titles[location.pathname] || "Pagina";
  };

  return (
    <>
    <header>
      <Navbar/>
      <div className='header-content'>
      <h1>{getPageTitle()}</h1>
      </div>
    </header>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/over-ons' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/opdrachten' element={<Assignments/>}/>
        <Route path='/opdracht/:id' element={<Vacancy setPageTitle={setPageTitle} />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
