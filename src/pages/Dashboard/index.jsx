import { ContainerCards, Container } from "./styles";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { Redirect } from "react-router-dom";
import Input from "../../components/Input";
import { useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export default function Home({
  isAuth, setIsAuth, techs, setTechsUpdate, techsUpdate, userName, courseModule,
}) {
  const [newTech, setnewTech] = useState(false);
  const [showTechEdit, setShowTechEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("Iniciante");

  if (!isAuth) {
    return <Redirect to="/login" />;
  }
  const logout = () => {
    localStorage.clear();
    setIsAuth(false);
  };
  const openModalRegister = () => {
    setnewTech(true);
  };
  const openModalEdit = (event) => {
    setInputValue(event.target.children[0].innerText);
    setShowTechEdit(true);
  };
  const handleTechRegister = () => {
    const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));
  
    api
      .post("users/techs", {title: inputValue, status: selectValue }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        setTechsUpdate(!techsUpdate);
        toast.success("Alterado!");
      })
      .catch((_) => toast.error("Tecnologia já existe"));
  };

  const handleEditTech = () => {
    const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));
    const tech = techs.find((tech) => tech.title === inputValue);
  
    tech
      ? api
          .put(`users/techs/${tech.id}`, {status: selectValue}, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((_) => {
            setTechsUpdate(!techsUpdate);
            toast.success("Tecnologia editada!");
            setShowTechEdit(false);
            setSelectValue("Iniciante");
          })
      : toast.error(
          "Tecnologia não existe!"
        );
  };
  const handleTechDelete = () => {
    const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));
    const tech = techs.find((tech) => tech.title === inputValue);
    tech
      ? api
          .delete(`users/techs/${tech.id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((_) => {
            setTechsUpdate(!techsUpdate);
            toast.success("Deletado.");
            setShowTechEdit(false);
          })
      : toast.error(
          "Não foi possivel deletar!"
        );
  };

  return (
    <Container>
      <div className="navBar">
        <div className="navContent">

          <span className="logoHome" >Kenzie Hub</span>

          <Button
            width={25}
            maxWidth={55}
            height={25}
            color={"--gray-3"}
            fontSize={10}
            historyEndPoint="/login"
            callback={logout}
          >
            Sair
          </Button>
        </div>
      </div>
      <hr className="hrNav"></hr>
      <div className="header">
        <h1> Olá, {userName}</h1>
        <div >
          <h2> {courseModule} </h2>
        </div>
      </div>
      <hr className="hrHeader"></hr>
      <div className="cardHeader">
        <h1 className="CardsTitle"> Tecnologias</h1>
        <Button
          width={14}
          maxWidth={32}
          height={32}
          color={"--gray-3"}
          fontSize={25}
          callback={openModalRegister}
        >
          +
        </Button>
      </div>
      <ContainerCards>
        {newTech && (
          <div className="modal modal--register">
            <div className="cabecalhoModal">
              <h2>Tecnologia Detalhes</h2>
              <p onClick={() => setnewTech(false)}>X</p>
            </div>
            <div className="inputArea">
              <Input
                placeholder="Digite uma tecnologia"
                name="techRegister"
                label="Nome"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
              />
              <label> Selecionar status </label>
              <select
                name="course_module"
                onChange={(event) => setSelectValue(event.target.value)}
              >
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>

              <Button
                width={100}
                maxWidth={324}
                height={45}
                color={"--primaryPink"}
                fontSize={15}
                callback={handleTechRegister}
              >
                Cadastrar Tecnologia
              </Button>
            </div>
          </div>
        )}
        {showTechEdit && (
          <div className="modal modal--edit">
            <div className="cabecalhoModal">
              <h2>Tecnologia Detalhes</h2>
              <p onClick={() => setShowTechEdit(false)}>X</p>
            </div>
            <div className="inputArea">
              <Input
                placeholder="Digite aqui sua tecnologia"
                name="techEdit"
                label="Nome da tecnologia"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                disabled={true}
              />
              <label> Selecionar status </label>
              <select
                name="course_module"
                onChange={(event) => setSelectValue(event.target.value)}
              >
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              <div className="buttonModalEdit">
                <Button
                  width={65}
                  maxWidth={204}
                  height={48}
                  color={"--primaryNegativePink"}
                  fontSize={16}
                  callback={handleEditTech}
                >
                  Salvar alterações
                </Button>
                <Button
                  width={30}
                  maxWidth={204}
                  height={48}
                  color={"--gray-1"}
                  fontSize={16}
                  callback={handleTechDelete}
                >
                  Excluir
                </Button>
              </div>
            </div>
          </div>
        )}
        {techs.map((tech) => (
          <Card
            key={tech.id}
            techTitle={tech.title}
            techStatus={tech.status}
            onClick={(event) => openModalEdit(event)}
          />
        ))}
      </ContainerCards>
    </Container>
  );
}
