import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/foorter/Footer'
import Navbar from './components/navbar/Navbar'
import ListaPostagens from './components/postagens/listapostagens/ListaPostagens'
import DeletarTema from './components/tema/deletartema/DeletarTema'
import FormTema from './components/tema/fromtema/FromTema'
import ListaTema from './components/tema/listaTemas/ListaTema'
import { AuthProvider } from './contestx/AuthContext'
import Cadastro from './pages/cadastro/Cadastro'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
function App() {
  return(
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar/>
            <div className='min-h-[80vh]'>
             <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/cadastro' element={<Cadastro/>}/>
              <Route path='/tema' element={<ListaTema/>}/>
              <Route path="/cadastrartema" element={<FormTema />} />
              <Route path="/editartema/:id" element={<FormTema />} />
              <Route path="/deletartema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />

             </Routes>
            </div>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </>
)
}

export default App
