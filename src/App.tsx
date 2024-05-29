
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/footer'
import Home from './paginas/home/home'
import Navbar from './components/navBar/NavBar'
import { AuthProvider } from './contexts/AuthContext.'
import Cadastro from './paginas/cadastro/Cadastro'
import ListaTemas from './components/temas/listaTemas/ListaTemas'
import DeletarTema from './components/temas/deletarTema/DeletarTema'
import FormularioTema from './components/temas/formularioTemas/FormularioTema'
import Login from './paginas/login/Login'
import ListaPostagens from './components/postagens/listarPostagens/ListarPostagens'
import FormularioPostagem from './components/postagens/formularioPostagem/FormularioPostagem'
import DeletarPostagem from './components/postagens/deletarPostafem/DeletarPostagem'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Perfil from './paginas/perfil/Perfil'
function App() {


  return (
    <>
      <AuthProvider>
      <ToastContainer/>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]' >
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastrar-Tema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
