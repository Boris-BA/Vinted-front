import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = ({ handleToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1 className="h1-form">S'inscrire</h1>
      <p className="error">{errorMessage}</p>
      <div className="container-form">
        <form
          className="container-form-input"
          onSubmit={async (event) => {
            event.preventDefault();
            setErrorMessage("");
            let token = null;
            const data = {
              username: username,
              email: email,
              password: password,
              newsletter: newsletter,
            };
            console.log(data);
            try {
              // const response = await axios.post(
              //   "https://lereacteur-vinted-api.herokuapp.com/user/signup",
              //   data
              // );
              const response = await axios.post(
                "https://site--backend-vinted--2qgmjpqnw8yp.code.run/user/signup",
                data
              );
              console.log("Inscription envoyée");
              console.log(response.data);
              token = response.data.token;
              handleToken(token);
              navigate("/");
            } catch (error) {
              console.log("Erreur");
              if (error.response?.status === 409) {
                setErrorMessage("Email déjà utilisé");
              }
              //   Si je reçois un message d'erreur "Missing parameters"
              if (error.response?.data.message === "Missing parameters") {
                setErrorMessage("Veuillez remplir tous les champs");
              }
            }
          }}
        >
          <input
            className={errorMessage ? "error-input" : null}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
          />
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
            placeholder="Mot de passse"
            value={password}
          />
          <div className="container-checkbox">
            <input
              className="input-checkbox"
              onChange={(event) => {
                // console.log(event.target.checked);
                setNewsletter(event.target.checked);
              }}
              type="checkbox"
              value={newsletter}
              name="newsletter"
              checked={null}
            />
            <span> S'inscrire à notre newsletter</span>
          </div>
          <p className="p-grey">
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
          <input
            className="btn-header-full-login"
            type="submit"
            value={"S'inscrire"}
          />
          <Link className="blue" to="/login">
            Tu as déjà un compte? Connecte-toi!
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
