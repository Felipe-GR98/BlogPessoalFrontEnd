import { createContext, useState, type ReactNode } from "react"
import type UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/Services"
import { ToastAlerta } from "../utils/ToastAlert"

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/login`, usuarioLogin, setUsuario)
            ToastAlerta("O Usuário foi autenticado com sucesso!",'sucesso')
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            ToastAlerta("Os Dados do usuário estão inconsistentes!",'erro')
        }
        setIsLoading(false)
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        })
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}