import "./App.css";
import buscarCategorias from "./service/categorias";

const categorias = await buscarCategorias();

function App(categorias) {
  return (
    <>
      <div>
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
      </div>
    </>
  );
}

export default App;
