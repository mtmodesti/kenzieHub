import styled from "styled-components";

export const Button = styled.button.attrs(props => ({

    type: 'submit'
   }))`
color: white;
height: 48px;
width: 324px;
border: none;
background-color: ${props => props.background === 'desabilitado' ? '#868E96' : '#FF577F'};
box-sizing: border-box;
border-radius: 4.06066px;
flex-grow: 0;
margin: 22px 0px;
:hover{
    background-color: var(--color-primary-focus);
}
`