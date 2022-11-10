import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleOffer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);
  const { id } = useParams();

  //   const params = useParams();
  //   console.log(params.id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        console.log(response.data);
        // console.log(data.product_details[0]);
        // console.log(data);

        setData(response.data);
        setIsloading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);
  return (
    <div>
      {isLoading ? (
        <p>Is loading...</p>
      ) : (
        <div className="offer-card">
          <div className="offer-img-left">
            <img
              className="offer-img"
              src={`${data.product_image.url}`}
              alt=""
            />
          </div>
          <div className="offer-content-right">
            <p>{data.product_price} €</p>
            <button>Acheter</button>
            <p>Marque</p> <span> {data.product_details[0].MARQUE}</span>
          </div>
        </div>
      )}
      <Link to="/">Home</Link>
    </div>
  );
};
export default SingleOffer;
