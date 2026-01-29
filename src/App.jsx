import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
    <Button nome = {"Teste de nome"}/>
      {/* <div>
        <div className="title">
          <h1>Produção de Roteiro</h1>
        </div>
        <div className="categorias">
          {categorias.map((categoria) => (
            <div className="corpo">
              <div className="titulo">{categoria.titulo}</div>
              <div className="botoes">
                {categoria.botoes.map((botao) => (
                  <button key={botao.id}>{botao.nome}</button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
}

export default App;
