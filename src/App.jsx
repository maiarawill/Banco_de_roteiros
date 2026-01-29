import "./App.css";

const categorias = [
  {
    titulo: "Gêneros",
    botoes: [
      { id: 1, nome: "Ação" },
      { id: 2, nome: "Comédia" },
      { id: 3, nome: "Drama" },
      { id: 4, nome: "Ficção Científica" },
      { id: 5, nome: "Terror" },
    ],
  },
  {
    titulo: "Temas",
    botoes: [
      { id: 6, nome: "Amor" },
      { id: 7, nome: "Amizade" },
      { id: 8, nome: "Superação" },
      { id: 9, nome: "Aventura" },
      { id: 10, nome: "Mistério" },
    ],
  },
];

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
