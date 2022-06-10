import "./Styles.css";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../services/api";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CreateAccForm = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [module, setModule] = useState("");
  const [user, setUser] = useState();

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches("[a-zA-Zs]+", "Apenas Letras"),
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        "^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$",
        "Senha Fraca"
      ),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password"), null], "Senhas precisam coincidir"),
    module: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  async function onHandleSubmit(data) {
    setUser(data);
    console.log(user);
    await api
      .post("/users", {
        email: data.email,
        password: data.password,
        name: data.name,
        bio: " ",
        contact: " ",
        course_module: data.module,
      })
      .then((response) => toast.success("Usuário criado com sucesso!"))
      .catch((error) => toast.error("Ops. Houve algum erro. Tente novamente."));
  }

  

  return (
    <div className="container">
      <ToastContainer />
      <div className="headerForm">
        <span className="titleOne">Kenzie Hub</span>
        <button
          onClick={() => {
            history.push("/");
          }}
          className="home"
        >
          Voltar
        </button>
      </div>

      <form onSubmit={handleSubmit(onHandleSubmit)} className="formCadastre">
        <div className="titlesBox">
          <span className="titleOneSpan">Cria sua conta</span>
          <span className="subtitle">Rápido e grátis, vamos nessa!</span>
        </div>

        <div className="inputBox">
          <span className="inputText">Nome</span>
          <input
            className="input"
            {...register("name")}
            placeholder="Digite aqui seu nome"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          {errors.name?.message}
        </div>

        <div className="inputBox">
          <span className="inputText">Email</span>
          <input
            {...register("email")}
            className="input"
            placeholder="Digite aqui seu email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          {errors.email?.message}
        </div>

        <div className="inputBox">
          <span className="inputText">Senha</span>
          <input
            className="input"
            placeholder="Digite aqui sua senha"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            {...register("password")}
          ></input>
          {errors.password?.message}
        </div>

        <div className="inputBox">
          <span className="inputText">Confirmar Senha</span>
          <input
            className="input"
            className="input"
            placeholder="Confirme aqui sua senha"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            {...register("confirmPassword")}
          ></input>
          {errors.confirmPassword?.message}
        </div>

        <div className="inputBox">
          <span className="inputText">Selecionar módulo</span>
          <select
            className="selectBox"
            onChange={(e) => {
              setModule(e.target.value);
            }}
            {...register("module")}
          >
            <option>Módulo 1</option>
            <option>Módulo 2</option>
            <option>Módulo 3</option>
            <option>Módulo 4</option>
          </select>
          {errors.module?.message}
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};
