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
              <button>S'inscrire</button>
            </Link>
            <Link to="login">
              <button>Se connecter</button>
            </Link>
          </>
        )}

        <button>Vend tes articles</button>
      </div>
    </div>
  );
};

export default Header;
