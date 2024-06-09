import styled from 'styled-components';
import { deleteFavorito, getFavoritos } from '../services/favoritos';
import { useEffect, useState } from 'react';
import livro from '../media/livro.png';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
  `

const ResultadoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const Resultado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  cursor: pointer;
  text-align: center;
  padding: 0 100px;
  p {
    width: 100%;
    color: white;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`
const Titulo = styled.h2`
  color: white;
  font-size: 36px;
  text-align: center;
  width: 100%;
  padding-top: 35px;
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  async function fecthFavoritos() {
    const favoritosAPI = await getFavoritos()
    setFavoritos(favoritosAPI)
  }

  useEffect(() => {
    fecthFavoritos()
  }, [])


  async function deletarFavorito(id) {
    await deleteFavorito(id)
    await fecthFavoritos()
    alert(`Livro removido dos favoritos (id: ${id})`)
  }

  return (
    <AppContainer>
      <div>
        <Titulo>Aqui estão seus livros favoritos:</Titulo>
        <ResultadoContainer>
          {favoritos.lenght !== 0 ? favoritos.map(favorito => (
            <Resultado onClick={() => deletarFavorito(favorito.id)}>
              <img src={livro} />
              <p>{favorito.nome}</p>
            </Resultado>
          )) : null
          }
        </ResultadoContainer>
      </div>
    </AppContainer>
  );
}
export default Favoritos;
