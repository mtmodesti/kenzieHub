import { ContainerForm, Container } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

export default function Login({
  setIsAuth,
  isAuth,
  setTechsUpdate,
  setUserData,

  techsUpdate,
}) {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().email("Email Inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Minimo de 8 digitos")
      .required("Campo obrigatório"),
  });

  const {register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleLogin = ({ email, password }) => {
    const userData = {email, password};
    api
      .post("sessions", userData)

      .then((response) => {
        const { id } = response.data.user;
        const { token } = response.data;
        /* 

        separar agora todas as infos do usuário no local storage
        como um objeto, a chave do objeto é @Kenziehub:info e o valor é
        a info do user
        
        */
        localStorage.setItem(
          "@kenzieHub:userName",
          JSON.stringify(response.data.user.name)
        );
        localStorage.setItem(
          "@kenzieHub:courseModule",
          JSON.stringify(
            `${response.data.user.course_module.split(" ")[0]} ${
              response.data.user.course_module.split(" ")[1]
            }`
          )
        );
        localStorage.setItem(
          "@kenzieHub:courseStatus",
          JSON.stringify(
            `${
              response.data.user.course_module.split(" ")[
                response.data.user.course_module.split(" ").length - 2
              ]
            } ${
              response.data.user.course_module.split(" ")[
                response.data.user.course_module.split(" ").length - 1
              ]
            }`
          )
        );
        localStorage.setItem("@kenzieHub:userId", JSON.stringify(id));
        localStorage.setItem("@kenzieHub:token", JSON.stringify(token));

        setIsAuth(true);
        history.push("/");
        setUserData({
          name: response.data.user.name,
          course_module: response.data.user.course_module,
          techs: response.data.user.techs,
        });
        toast.success("Login feito!");
        setTechsUpdate(!techsUpdate);
      })
      .catch((_) => {
        toast.error("Erro. Tente novamente!");
      });
  };

  if (isAuth) {
    return <Redirect to="/" />;
  }

  const handleRegisterRedirect = () => {
    history.push("/register");
  };

  return (
    <Container>
      <span>Kenzie Hub</span>
      <ContainerForm onSubmit={handleSubmit(handleLogin)}>
        <h2> Login </h2>

        <Input
          label="Email"
          placeholder="Digite aqui seu email"
          name="email"
          register={register}
          error={errors.email?.message}
        />
        <Input
          label="Senha"
          placeholder="Digite aqui sua senha"
          name="password"
          type="password"
          register={register}
          error={errors.password?.message}
        />
        <Button width={90} height={38.5} color={"--primaryPink"} type="submit">
          Entrar
        </Button>
        <p> Ainda não possui uma conta? </p>
        <Button
          width={90}
          height={38.5}
          color={"--gray-1"}
          historyEndPoint="/register"
          type="button"
          callback={handleRegisterRedirect}
        >
          Cadastre-se
        </Button>
      </ContainerForm>
    </Container>
  );
}
