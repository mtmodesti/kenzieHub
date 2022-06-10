import { Button } from "./styles.js"


export const LoginButton = ({text, background, handleFunction}) => {
  return (
      <Button 
      background={background} 
      onClick={(e) => {
        e.preventDefault()
         handleFunction()
      }}
      >{text}</Button>
  )
}

/* ssss */
