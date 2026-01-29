const defaultCategorias = [
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
