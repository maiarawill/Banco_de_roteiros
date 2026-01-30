function Button({ id, nome, selecionado, setCategoriasRecuperadas }) {
  function mudarSelecionado() {
    if (selecionado === true) {
      console.log(nome + "Está selecionado");
    } else {
      console.log(nome + "Não está selecionado");
    }

    mudarEstadoSelecionado();
  }

  const mudarEstadoSelecionado = () => {
    setCategoriasRecuperadas((categoriasAntigas) => {
      return categoriasAntigas.map((titulos) => ({
        ...titulos,
        botoes: titulos.botoes.map((botao) =>
          botao.id === id
            ? { ...botao, selecionado: !botao.selecionado }
            : botao,
        ),
      }));
    });
  };

  return (
    <div>
      {selecionado ? (
        <button
          className="bg-indigo-800 text-white px-4 py-2 rounded rounded-2xl m-1 hover:bg-indigo-950"
          onClick={mudarSelecionado}
        >
          {nome}
        </button>
      ) : (
        <button
          className="bg-indigo-200 text-white px-4 py-2 rounded rounded-2xl m-1 hover:bg-indigo-950"
          onClick={mudarSelecionado}
        >
          {nome}
        </button>
      )}
    </div>
  );
}

export default Button;
