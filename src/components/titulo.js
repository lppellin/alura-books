import styled from "styled-components";

export const Titulo = styled.h2`
    width:100%;
    padding:30px 0;
    background-color: white;
    color: ${props => props.color || 'black'};
    font-size: ${props => props.fontSize || '18px'};
    text-align:${props => props.$alignment || 'center'};
    margin: 0;
`
