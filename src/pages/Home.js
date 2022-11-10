// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

///////////
import OfferWrap from "../components/OfferWrap";

//////////

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        console.log(response.data);
        setData(response.data);
        setIsloading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      {isLoading ? (
        <p>Is loading...</p>
      ) : (
        <OfferWrap data={data} isLoading={isLoading} />
      )}
      {/* <Link to="offer">Aller sur Offer</Link> */}
      {/* <Link to="offer"></Link> */}
    </div>
  );
};

export default Home;
