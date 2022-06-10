import { ContainerForm, Container } from "./styles";
import Input from "../../components/Input";
import { useState } from "react";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";

export default function Register({ isAuth, apearPass }) {
  const [inputName, setInputName] = useState(false);
  const [inputEmail, setInputEmail] = useState(false);
  const [inputPassword, setInputPassword] = useState(false);
  const [inputPassConfirm, setInputPassConfir] = useState(false);
  const [isfaded, setIsFaded] = useState(true);

  useEffect(() => {
    inputName && inputEmail && inputPassword && inputPassConfirm
      ? setIsFaded(false)
      : setIsFaded(true);
  }, [inputName, inputEmail, inputPassword, inputPassConfirm]);

  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email Inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Minimo de 8 digitos")
      .required("Campo obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
  });

  /* 
  
  
  
  
  */

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const handleRegister = ({ name, email, password, course_module }) => {
    const userData = {
      name,
      email,
      password,
      course_module,
      bio: "_____",
      contact: "_____",
    };
    api
      .post("users", userData)
      .then((_) => {
        toast.success("Criação de conta ok!");
        history.push("/login");
      })
      .catch((err) => {
        toast.error("Tente outro e-mail!");
      });
  };
  if (isAuth) {
    return <Redirect to="/" />;
  }
  return (
    <Container>
      <div className="Header">
        <span className="spanLogo">Kenzie Hub</span>
        <Button
          height={25}
          historyEndPoint="/login"
          color={"--gray-3"}
          width={27}
          fontSize={10}
        >
          Voltar
        </Button>
      </div>

      <ContainerForm onSubmit={handleSubmit(handleRegister)}>
        <h2> Crie sua conta. </h2>
        <p> Rapido e grátis. </p>

        <Input
          error={errors.name?.message}
          register={register}
          placeholder="Digite aqui seu nome"
          name="name"
          label="Nome"
          onChange={(event) =>
            event.target.value.length > 0
              ? setInputName(true)
              : setInputName(false)
          }
        />

        <Input
          error={errors.email?.message}
          register={register}
          placeholder="Digite aqui seu email"
          type="text"
          name="email"
          label="Email"
          onChange={(event) =>
            event.target.value.length > 0
              ? setInputEmail(true)
              : setInputEmail(false)
          }
        />

        <Input
          error={errors.password?.message}
          register={register}
          placeholder="Digite aqui sua senha"
          name="password"
          label="Senha"
          onChange={(event) =>
            event.target.value.length > 0
              ? setInputPassword(true)
              : setInputPassword(false)
          }
        />

        <Input
          error={errors.passwordConfirm?.message}
          register={register}
          placeholder="Confirme sua senha"
          name="passwordConfirm"
          label="Confirmar senha"
          onChange={(event) =>
            event.target.value.length > 0
              ? setInputPassConfir(true)
              : setInputPassConfir(false)
          }
        />
        <label>
          Módulo
          {!!errors.course_module?.message && (
            <span> - {errors.course_module?.message}</span>
          )}
        </label>

        <select {...register("course_module")} name="course_module">
          <option value="Módulo Um">Módulo Um</option>
          <option value="Módulo Dois">Módulo Dois</option>
          <option value="Módulo Três">Módulo Três</option>
          <option value="Módulo Quatro">Módulo Quatro</option>
          <option value="Módulo Cinco">Módulo Cinco</option>
          <option value="Módulo Seis">Módulo Seis</option>
        </select>
        <Button
          width={90}
          height={39}
          color={isfaded ? "--primaryNegativePink" : "--primaryPink"}
          type="submit"
        >
          Cadastrar
        </Button>
      </ContainerForm>
    </Container>
  );
}
