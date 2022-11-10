import { Link } from "react-router-dom";
import SingleOffer from "../components/SingleOffer";

const Offer = () => {
  return (
    <div className="container">
      <p>Je suis sur la page Offre</p>
      <SingleOffer></SingleOffer>
      <Link to="/">Aller sur Home</Link>
    </div>
  );
};
export default Offer;
