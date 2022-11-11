import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  //axios

  return (
    <div className="container">
      <h1 className="h1-form">Se connecter</h1>
      <p className="error">{errorMessage}</p>
      <div className="container-form">
        <form
          className="container-form-input"
          onSubmit={async (event) => {
            event.preventDefault();
            setErrorMessage("");
            /////
            //   let token =
            //     "R6OEZ1Hd3XbP2lx8Enucy4kxDqqc1I0FWjFuBIhg2hjlnSSltRLaAf0NH8v8Qz3H";
            /////
            let token = null;
            const data = { email: email, password: password };
            try {
              const response = await axios.post(
                "https://lereacteur-vinted-api.herokuapp.com/user/login",
                data
              );
              console.log("Formulaire envoyé");
              // console.log(response.data);
              token = response.data.token;
              // console.log(token);
              handleToken(token);
              navigate("/");
            } catch (error) {
              console.log("Erreur");
              console.log("Mot de passe ou Email incorect");
              if (error.response?.status === 400) {
                setErrorMessage("Email ou mot de passe incorect");
              }
            }
            //   token = handleToken(token);
            //   navigate("/");
          }}
        >
          <input
            className={errorMessage ? "error-input" : null}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="text"
            placeholder="Email"
            value={email}
          />
          <input
            className={errorMessage ? "error-input" : null}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
            placeholder="Mot de passe"
            value={password}
          />
          <input
            className="btn-header-full-login"
            type="submit"
            value={"Se connecter"}
          />
        </form>
        <Link className="blue" to="/signup">
          Pas encore de compte ? Inscris-toi!
        </Link>
      </div>
    </div>
  );
};

export default Login;
