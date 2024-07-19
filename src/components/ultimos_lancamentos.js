<<<<<<< HEAD
import { livros } from "./ultimos_lancamentos_dados";
import styled from "styled-components";
import { Titulo } from "./titulo";
import CardRecomenda from "./card_recomenda";
import imgLivro from '../media/livro2.png';

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom:20px;
    display:flex;
    flex-direction:column;
`

const NovosLivrosContainer = styled.div`
    margin-top:30px;
    display:flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo
                color="#002F52"
                fontSize="36px"
            >ÚLTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (<img src={livro.src} />))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imgLivro}
            />
            <CardRecomenda
                titulo="Talvez você se interesse por"
                subtitulo="Angular 12"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imgLivro}
            />
        </UltimosLancamentosContainer>
    )
}
=======
import { livros } from "./ultimos_lancamentos_dados";
import styled from "styled-components";
import { Titulo } from "./titulo";
import CardRecomenda from "./card_recomenda";
import imgLivro from '../media/livro2.png';

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom:20px;
    display:flex;
    flex-direction:column;
`

const NovosLivrosContainer = styled.div`
    margin-top:30px;
    display:flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo
                color="#002F52"
                fontSize="36px"
            >ÚLTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (<img src={livro.src} />))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imgLivro}
            />
            <CardRecomenda
                titulo="Talvez você se interesse por"
                subtitulo="Angular 12"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imgLivro}
            />
        </UltimosLancamentosContainer>
    )
}
>>>>>>> 9db4eebfa7495377fd28c7c40613a549e2f9d5e3
export default UltimosLancamentos