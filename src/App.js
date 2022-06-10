import Routes from "./Routes";
import GlobalStyle from "./styles/CssGlobal";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
