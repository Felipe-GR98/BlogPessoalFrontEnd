import { createContext, useState } from "react";
import type UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Services";

interface AuthContextProps{
  usuario: UsuarioLogin;
  handleLogout(): void;
  handleLogin(usuario: UsuarioLogin): Promise<void>;
  isLoading: boolean;
}

interface AuthProviderProps{
  children: React.ReactNode;
} 

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({children}: AuthProviderProps){
  const [usuario, setUsuario] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token:'',
  })

  const [isLoading, setIsLoading] = useState(false)

  async function handleLogin(ususarioLogin: UsuarioLogin){
    setIsLoading(true)
    try{
      await login('/usuarios/login',ususarioLogin,setUsuario)
        alert('Usuario autentificado com sucesso')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }catch(error){
      alert('Os dados do Usuário estão inconsistentes')
    }
    setIsLoading(false)
  }

  function handleLogout(){
    setUsuario({
        id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token:'',
    })
  }
  return(
    <AuthContext.Provider value={{usuario,handleLogin,handleLogout,isLoading}}>
      {children}
    </AuthContext.Provider>
  )
}