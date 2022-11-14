import { Link } from "react-router-dom";

const Header = ({ token, handleToken, search, setSearch }) => {
  return (
    <div className="header-container container">
      <Link to="/">
        <div className="logo-header">
          <img
            className="logo-img"
            src="https://lereacteur-vinted.netlify.app/static/media/logo.10b0caad793dd0a8ea72.png"
            alt="logo"
          />
        </div>
      </Link>
      <div className="search-bar">
        <form action="">
          <input
            onChange={(event) => {
              event.preventDefault();
              setSearch(event.target.value);
            }}
            className="search-bar-button"
            type="text"
            placeholder="Rechercher des articles"
            value={search}
          />
        </form>
      </div>
      <div className="container-button">
        {token ? (
          <>
            <button
              className="btn-header-full"
              onClick={() => {
                handleToken(null);
              }}
            >
              Se déconnecter
            </button>
          </>
        ) : (
          <>
            <Link to="/signup">
              <button className="btn-header-empty">S'inscrire</button>
            </Link>
            <Link to="login">
              <button className="btn-header-empty">Se connecter</button>
            </Link>
          </>
        )}
        <Link to="/publish">
          <button className="btn-header-full">Vend tes articles</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
