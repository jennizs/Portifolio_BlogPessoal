
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/NavBar/NavBar'
import Footer from './components/footer/footer'
import Home from './paginas/home/home'

function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <div className='min-h[80vh]' >
    <Routes>
    <Route path="/"element={<Home /> } />
    <Route path="/home"element={<Home /> } />
    <Route path="/login"element={<Home /> } />
    </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
