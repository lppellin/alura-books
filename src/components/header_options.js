<<<<<<< HEAD
import styled from "styled-components";
import { Link } from "react-router-dom";

const Option = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px; 
    cursor: pointer;
    min-width: 120px;
`
const Options = styled.ul`
    display: flex;
`
const textOptions = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function HeaderOptions() {
    return (
        <Options>
            {textOptions.map((texto) => (
                <Link to ={`/${texto.toLowerCase()}`}><Option key={texto}><p>{texto}</p></Option></Link>
            ))}
        </Options>
    )
}
export default HeaderOptions;
=======
import styled from "styled-components";
import { Link } from "react-router-dom";

const Option = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px; 
    cursor: pointer;
    min-width: 120px;
`
const Options = styled.ul`
    display: flex;
`
const textOptions = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function HeaderOptions() {
    return (
        <Options>
            {textOptions.map((texto) => (
                <Link to ={`/${texto.toLowerCase()}`}><Option key={texto}><p>{texto}</p></Option></Link>
            ))}
        </Options>
    )
}
export default HeaderOptions;
>>>>>>> 9db4eebfa7495377fd28c7c40613a549e2f9d5e3
