import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Navbar from './components/navbar/navbar'

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
      </Routes>
    </>
  )
}

export default App
