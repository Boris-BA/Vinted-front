import { Link } from "react-router-dom";

const Header = ({ token, handleToken }) => {
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

        <button className="btn-header-full">Vend tes articles</button>
      </div>
    </div>
  );
};

export default Header;
