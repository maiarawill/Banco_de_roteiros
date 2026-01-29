import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

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


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App categorias={categorias}/>
  </StrictMode>,
)
