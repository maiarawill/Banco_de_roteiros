import "./App.css";
import Button from "./components/Button";


function App({categorias}) {
  return (
       <div className="bg-indigo-100 w-screen h-screen p-3">
        <div className="title font-sans font-bold text-4xl m-4 text-indigo-900">
          <h1>Produção de Roteiro</h1>
        </div>
        <div className="categorias">
          {categorias.map((categoria) => (
            <div className="corpo" key={categoria.titulo}>
              <div className="titulo font-sans font-bold text-2xl text-indigo-900">{categoria.titulo}</div>
              <div className="botoes flex flex-row">
                {categoria.botoes.map((botao) => {
                  console.log(botao.nome)
                  return(
                  <Button key={botao.id} nome={botao.nome} />
                )})}
              </div>
            </div>
          ))}
        </div>
      </div> 
//PROXIMA TAREFA USE STATE/ON CLICK PARA SABER QUAL BOTÃO EU CLIQUEI
  );
}

export default App;
