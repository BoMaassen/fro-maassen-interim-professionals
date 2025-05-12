import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/navbar'
import About from './pages/about/About'
import Assignments from './pages/assignments/Assignments'
import Home from './pages/home/home'
import Contact from './pages/contact/Contact'

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
    </>
  )
}

export default App
