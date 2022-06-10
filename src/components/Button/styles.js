import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: ${(props) => (props.width ? `${props.width}%` : "100%")};
  height: ${(props) => (props.height ? `${props.height}px` : "40px")};
  background-color: ${(props) =>
    props.color ? `var(${props.color})` : "black"};
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: 600;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "16px")};
  max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : "324px")};

    :hover{
      background-color: var(--primaryNegativePink);
    }

`;


/* 
EXEMPLO DO SITE
const Button = styled.button`
  
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};


*/