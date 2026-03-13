import { Routes, Route, useLocation} from 'react-router-dom'
import { useState } from 'react';
import './App.css'
import Navbar from './components/navbar/Navbar'
import About from './pages/about/About'
import Assignments from './pages/assignments/Assignments'
import Home from './pages/home/home'
import Error from './pages/Error/Error'
import Contact from './pages/contact/Contact'
import Vacancy from './pages/vacancy/Vacancy.jsx'
import Footer from './components/footer/Footer';
import ScrollToTop from './components/scrollToTop/scrollToTop';

function App() {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");

  const titles = {
    '/': 'Interim opdrachten voor professionals',
    '/over-ons': 'Over ons',
    '/contact': 'Contact ons',
    '/opdrachten': 'Opdrachten',
  };

const getPageTitle = () => {
  const path = location.pathname;

  if (path.startsWith("/opdracht/")) {
    const id = path.split("/")[2];

    if (!id || !pageTitle) {
      return "Pagina niet gevonden";
    }

    return pageTitle;
  }

  return titles[path] || "Pagina niet gevonden";
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
        <Route path="*" element={<Error />} />
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
