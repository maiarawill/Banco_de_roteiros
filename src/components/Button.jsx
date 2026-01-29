function Button({nome, selecionado, setCategoriasRecuperadas}) {

    function mudarSelecionado(){
        if(selecionado === true){
    console.log(nome + "Está selecionado") }
        else{
    console.log(nome + "Não está selecionado") }   
  }
    return(
        <div>
            <button className="bg-indigo-800 text-white px-4 py-2 rounded rounded-2xl m-1 hover:bg-indigo-950" onClick={mudarSelecionado} >{nome}</button>
        </div>
    )
}

export default Button

