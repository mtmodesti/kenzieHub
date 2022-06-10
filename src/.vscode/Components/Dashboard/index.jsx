import "./styles.css";
import { useHistory } from "react-router-dom";
import { Card } from "./styles";
import { useState } from "react";
import { ModalCadastroTec } from "../ModalCadsatroTec";

export const Dashboard = ({ setAuth, auth }) => {

  const history = useHistory();
  const [modalIsOpen, setIsOpen] = useState(false)

  if(!auth){
    history.push(`/`)
  }

  return (
    <>
      <ModalCadastroTec modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <header className="headerDash">
        <h1 className="titleOne">Kenzie Hub</h1>
        <button
          onClick={(e) => {
            e.preventDefault();
            localStorage.clear();
            setAuth(false);
            history.push("/");
          }}
          className="exitBtn"
        >
          Sair
        </button>
      </header>
      <div className="userInfo">
        <h1 className="titleDash">
          Olá {JSON.parse(localStorage.getItem("@Kenziehub:user")).name}
        </h1>
        <span className="spanDash">
          {JSON.parse(localStorage.getItem("@Kenziehub:user")).course_module}
        </span>
      </div>

      <section className="secBody">
        <div className="secTec">
          <span className="titleCards">Tecnologias</span>
          <button
            className="addTec"
            onClick={() => {
              console.log("adicionar tec");
            }}
          >
            +
          </button>
        </div>

        <div className="cardsSec">
          {
            (JSON.parse(localStorage.getItem("@Kenziehub:user")).techs,
            length === 0 ? (
              <h1 className="titleCard">Sem registros</h1>
            ) : (
              <Card>
                {" "}
                <h1>teste</h1> <span>testespan</span>{" "}
              </Card>
            ))
          }
        </div>

        <button onClick={() => {
          setIsOpen(true)
        }}>Modal teste</button>
        {/* <button onClick={() => {console.log(  JSON.parse(localStorage.getItem('@Kenziehub:user'))       )}} >dash teste</button> */}
      </section>
    </>
  );
};
