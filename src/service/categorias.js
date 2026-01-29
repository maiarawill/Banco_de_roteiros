const defaultCategorias = [
  {
    titulo: "Gêneros",
    botoes: [
      { id: 1, nome: "Ação", selecionado: false },
      { id: 2, nome: "Comédia", selecionado: false },
      { id: 3, nome: "Drama", selecionado: false },
      { id: 4, nome: "Ficção Científica", selecionado: false },
      { id: 5, nome: "Terror", selecionado: false },
    ],
  },
  {
    titulo: "Temas",
    botoes: [
      { id: 6, nome: "Amor", selecionado: false },
      { id: 7, nome: "Amizade", selecionado: false },
      { id: 8, nome: "Superação", selecionado: false },
      { id: 9, nome: "Aventura", selecionado: false },
      { id: 10, nome: "Mistério", selecionado: false },
    ],
  },
];


async function buscarCategorias() {
  try {
    const apiUrl = "http://localhost:8080";
    const response = await fetch(apiUrl + "/categorias");
    if (!response.ok) {
      return defaultCategorias;
    }
    const categorias = await response.json();
    return categorias;
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
    return defaultCategorias;
  }
}
export default buscarCategorias;
