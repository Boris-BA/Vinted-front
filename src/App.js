import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";

//Import des pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

//Import des Composants
import Header from "./components/Header";

////
function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);

  const handleToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token", token, { expires: 7 });
    } else {
      setToken(null);
      Cookies.remove("token");
    }
  };

  return (
    <div className="App">
      <Router>
        <Header token={token} handleToken={handleToken}></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/offer/:id" element={<Offer />}></Route>
          <Route
            path="/login"
            element={<Login handleToken={handleToken} />}
          ></Route>
          <Route
            path="/signup"
            element={<Signup handleToken={handleToken} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
