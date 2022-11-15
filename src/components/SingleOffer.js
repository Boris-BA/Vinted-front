import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SingleOffer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);
  const { id } = useParams();

  //   const params = useParams();
  //   console.log(params.id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(
        //   `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        // );
        const response = await axios.get(
          `https://site--backend-vinted--2qgmjpqnw8yp.code.run/offer/${id}`
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
        <div className="offer-card container">
          <div className="offer-img-left">
            <img
              className="offer-img"
              src={`${data.product_image.url}`}
              alt=""
            />
          </div>
          <div className="offer-content-right">
            <p className="p-card-price">{data.product_price} €</p>

            {data.product_details.map((detail, index) => {
              const objectKey = Object.keys(detail)[0];

              return (
                <div key={index}>
                  <div className="card-text-container">
                    <div>
                      <span className="p-grey label">{objectKey}</span>
                    </div>
                    <div>
                      <span className="p-black label">{detail[objectKey]}</span>
                    </div>
                  </div>
                </div>
              );
            })}
            <hr />
            <p className="bold">{data.product_name}</p>
            <p className="p-grey-offer">{data.product_description}</p>
            <div className="avatar">
              {data.owner?.account.avatar ? (
                <img
                  className="avatar-img"
                  src={data.owner?.account.avatar.secure_url}
                  alt="owner"
                />
              ) : (
                <div className="avatar-img"></div>
              )}
              <span>
                {data.owner ? data.owner.account.username : "John Doe"}
              </span>
            </div>
            <Link to="/payment" state={{ title: "Toto", price: "12" }}>
              <button className="btn-header-full-offer">Acheter</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default SingleOffer;
