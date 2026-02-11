
function Home(){
  return(
    <>
    <div className="bg-indigo-900 flex justify-center">
        <div className='container grid grid-cols-2 text-white' >
          <div className="flex flex-col gap-4 items-center justify-center py-4">

              <h2 className='text-5xl font-bold'>Seja Bem Vinde!</h2>

            <p className="text-xl">Esperesse aqui seus pensamentos e Opiniões</p>

          <div className="flex justify-aroud gap-4">
            <div className="rounded text-white boder-white border-solir boder-2 py-2 pc-4">
          
            Nova Postagem
        </div>
      </div>
    </div>
    <div className="flex justify-center">
      <img 
      src="https://i.imgur.com/fyfri1v.png"
      alt="Imagem Da página Home"
      style={{width:'66%'}}/>
        </div>
    </div>
  </div>    
    </>
  )
}

export default Home