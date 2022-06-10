import { useHistory } from "react-router-dom";
import { ButtonStyle } from "./styles";


/* 
Passar todas as características do botão por props nas páginas

*/

export default function Button({
  children,  width,  maxWidth,  height,  fontSize,   color,
  historyEndPoint,   callback,  type,
}) 

{
  const history = useHistory();
  return (
    <ButtonStyle
      width={width}  height={height} color={color}
       onClick={() => {
        callback && callback();
        history.push(historyEndPoint);
      }}
      fontSize={fontSize}   maxWidth={maxWidth}    type={type}
    >
      {children}
    </ButtonStyle>
  );
}
