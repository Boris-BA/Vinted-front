import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";

//Import des pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";

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

  //Filter nav bar
  const [search, setSearch] = useState("");
  const [filterAsc, setFilterAsc] = useState("");
  const [values, setValues] = useState([0, 500]);

  return (
    <div className="App">
      <Router>
        <Header
          token={token}
          handleToken={handleToken}
          search={search}
          setSearch={setSearch}
        ></Header>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                search={search}
                filterAsc={filterAsc}
                setFilterAsc={setFilterAsc}
                values={values}
                setValues={setValues}
              />
            }
          ></Route>
          <Route path="/offer/:id" element={<Offer />}></Route>
          <Route
            path="/login"
            element={<Login handleToken={handleToken} />}
          ></Route>
          <Route
            path="/signup"
            element={<Signup handleToken={handleToken} />}
          ></Route>
          <Route path="/publish" element={<Publish token={token} />}></Route>
          <Route path="/payment" element={<Payment token={token} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
