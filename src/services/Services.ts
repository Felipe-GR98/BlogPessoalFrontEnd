import axios from "axios";

const api = axios.create({
  baseURL:'https://blog-pessoal-dqtp.onrender.com'
})

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const cadastroUsuario = async (url: string, dados: object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const login = async(url: string, dados: object, setDados:Function) => {

  const resposta = await api.post(url,dados);
  setDados(resposta.data)
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const buscar = async (url: string, setDados: Function, header: object) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}