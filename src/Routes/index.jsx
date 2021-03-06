import { useEffect } from "react";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/FormRegister";
import { api } from "../services/api";

export default function Routes() {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState({});
  const [techs, setTechs] = useState([]);
  const [techsUpdate, setTechsUpdate] = useState(false);
  const [userName, setUserName] = useState("");
  const [courseModule, setCourseModule] = useState("");
  const [courseStatus, setCourseStatus] = useState("");
  const [apearPass, setApearPass] = useState(false);

  useEffect(() => {
    setUserName(JSON.parse(localStorage.getItem("@kenzieHub:userName")));
    setCourseModule(
      JSON.parse(localStorage.getItem("@kenzieHub:userModule"))
    );
    setCourseStatus(
      JSON.parse(localStorage.getItem("@kenzieHub:userStatus"))
    );
  }, [userData]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));

    if (token) {
      return setIsAuth(true);
    }
  }, [isAuth]);
  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("@kenzieHub:userId"));
    if (id) {
      api.get(`users/${id}`).then((response) => {
        setTechs(response.data.techs);
      });
    }
  }, [techsUpdate]);
  return (
    <Switch>
      <Route exact path="/">
        <Home
          isAuth={isAuth}
          setIsAuth={setIsAuth}
          techs={techs}
          setTechsUpdate={setTechsUpdate}
          techsUpdate={techsUpdate}
          userName={userName}
          courseModule={courseModule}
          courseStatus={courseStatus}
        />
      </Route>

      <Route path="/login">
        <Login
          isAuth={isAuth}
          setIsAuth={setIsAuth}
          setUserData={setUserData}
          userData={userData}
          setTechsUpdate={setTechsUpdate}
          techsUpdate={techsUpdate}
          apearPass={apearPass}
          setApearPass={setApearPass}
        />
      </Route>

      <Route path="/register">
        <Register
          isAuth={isAuth}
          apearPass={apearPass}
          setApearPass={setApearPass}
        />
      </Route>
    </Switch>
  );
}
