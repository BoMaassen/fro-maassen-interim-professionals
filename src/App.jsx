import { Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/navbar/navbar'
import About from './pages/about/About'
import Assignments from './pages/assignments/Assignments'
import Home from './pages/home/home'
import Contact from './pages/contact/Contact'

function App() {

  return (
    <>
    <header>
      <Navbar/>
      <h1>Hi</h1>
      <p>test</p>
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
