import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/home'

function App() {

  return (
    <>
      <h1>Hi</h1>
      <p>test</p>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
