import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = ({ handleToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState("");
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Se connecter</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          let token = null;
          const data = {
            username: username,
            email: email,
            password: password,
            newsletter: newsletter,
          };
          console.log(data);
          try {
            const response = await axios.post(
              "https://lereacteur-vinted-api.herokuapp.com/user/signup",
              data
            );
            console.log("Inscription envoyée");
            console.log(response.data);
            token = response.data.token;
            handleToken(token);
            navigate("/");
          } catch (error) {
            console.log("Erreur");
          }
        }}
      >
        <input
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
        />
        <input
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          type="text"
          placeholder="Email"
          value={email}
        />
        <input
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          type="password"
          placeholder="Mot de passse"
          value={password}
        />

        <label htmlFor="">Newsletter</label>
        <input
          onChange={(event) => {
            // console.log(event.target.checked);
            setNewsletter(event.target.checked);
          }}
          type="checkbox"
          value={newsletter}
          name="newsletter"
          checked={null}
        />

        <input type="submit" value={"S'inscrire"} />
        <Link to="/login">Tu as déjà un compte? Connecte-toi!</Link>
      </form>
    </div>
  );
};

export default Signup;
