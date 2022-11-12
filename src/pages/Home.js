// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

///////////
import OfferWrap from "../components/OfferWrap";
import Banner from "../components/Banner";
import Filter from "../components/Filter";
//////////

const Home = ({ search, filterAsc, setFilterAsc }) => {
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);
  const [notFound, setnotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setnotFound("");
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}&sort=${filterAsc}`
        );
        // console.log(response.data.offers);
        if (response.data.count === 0) {
          setnotFound("Aucun article trouvé");
        }
        console.log(response.data);
        setData(response.data);
        setIsloading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [search, filterAsc]);
  return (
    <>
      <Filter filterAsc={filterAsc} setFilterAsc={setFilterAsc}></Filter>
      <Banner></Banner>
      <div className="container">
        {isLoading ? (
          <p>Is loading...</p>
        ) : (
          <>
            <OfferWrap data={data} isLoading={isLoading} />
            <p className="p-not-found">{notFound}</p>
          </>
        )}
        {/* <Link to="offer">Aller sur Offer</Link> */}
        {/* <Link to="offer"></Link> */}
      </div>
    </>
  );
};

export default Home;
