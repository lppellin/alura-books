<<<<<<< HEAD
// import { livros } from "./pesquisa_dados";
import Input from "./input";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getLivros } from "../services/livros";
import { postFavorito } from "../services/favoritos";
import livroimg from '../media/livro.png';


const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: auto;
        width: 100%;        
`
const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`
const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

const Resultado = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        cursor: pointer;

        p{width: 200px;}

        img{ width: 100px;}

        &:hover {border:1px solid white;}
`



function Pesquisa() {
        const [livrosPesquisados, setLivrosPesquisados] = useState([])
        const [livros, setLivros] = useState([])

        async function fetchLivros() {
                const livrosAPI = await getLivros()
                setLivros(livrosAPI)
        }

        useEffect(() => {
                fetchLivros()
        }, [])

        async function inserirFavorito(id) {
                await postFavorito(id)
                alert(`Livro adicionado aos favoritos (id: ${id})`)
        }

        return (
                <PesquisaContainer>
                        <Titulo>Já sabe por onde começar?</Titulo>
                        <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
                        <Input
                                placeholder="Pesquise aqui"
                                onBlur={evento => {
                                        const textoDigitado = evento.target.value
                                        const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                                        setLivrosPesquisados(resultadoPesquisa)
                                }}

                        />
                        {livrosPesquisados.map(livro => (
                                <Resultado onClick={() => inserirFavorito(livro.id)}>
                                        <p>{livro.nome}</p>
                                        <img src={livroimg} />
                                </Resultado>

                        ))}
                </PesquisaContainer>
        )
}
export default Pesquisa

=======
// import { livros } from "./pesquisa_dados";
import Input from "./input";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getLivros } from "../services/livros";
import { postFavorito } from "../services/favoritos";
import livroimg from '../media/livro.png';


const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: auto;
        width: 100%;        
`
const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`
const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

const Resultado = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        cursor: pointer;

        p{width: 200px;}

        img{ width: 100px;}

        &:hover {border:1px solid white;}
`



function Pesquisa() {
        const [livrosPesquisados, setLivrosPesquisados] = useState([])
        const [livros, setLivros] = useState([])

        async function fetchLivros() {
                const livrosAPI = await getLivros()
                setLivros(livrosAPI)
        }

        useEffect(() => {
                fetchLivros()
        }, [])

        async function inserirFavorito(id) {
                await postFavorito(id)
                alert(`Livro adicionado aos favoritos (id: ${id})`)
        }

        return (
                <PesquisaContainer>
                        <Titulo>Já sabe por onde começar?</Titulo>
                        <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
                        <Input
                                placeholder="Pesquise aqui"
                                onBlur={evento => {
                                        const textoDigitado = evento.target.value
                                        const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                                        setLivrosPesquisados(resultadoPesquisa)
                                }}

                        />
                        {livrosPesquisados.map(livro => (
                                <Resultado onClick={() => inserirFavorito(livro.id)}>
                                        <p>{livro.nome}</p>
                                        <img src={livroimg} />
                                </Resultado>

                        ))}
                </PesquisaContainer>
        )
}
export default Pesquisa

>>>>>>> 9db4eebfa7495377fd28c7c40613a549e2f9d5e3
