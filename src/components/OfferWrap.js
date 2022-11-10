import { Link } from "react-router-dom";

const OfferWrap = ({ data, isLoading }) => {
  //   console.log(data?.offers);
  //   console.log(isLoading);
  // console.log(data.offers._id);
  //   console.log(data.offers[1].owner.account.username);
  // console.log(data.offers[1].owner.account.avatar.url);
  //   {`${item.owner.account.avatar.url}`}

  return (
    <div className="card-flex">
      {data.offers.map((item, index) => {
        return (
          <div key={index}>
            <Link to={`/offer/${item._id}`}>
              <div className="card">
                <div className="avatar">
                  <div className="avatar-img"></div>
                  {/* {item.owner.account.avatar.url ? (
                  <img
                    src="https://res.cloudinary.com/lereacteur/image/upload/v1667579365/api/vinted-v2/users/63653de436dd4584809e40d0/avatar.jpg"
                    alt=""
                  />
                ) : (
                  "Avatar"
                )} */}
                  <span>
                    {item.owner ? item.owner.account.username : "John Doe"}
                  </span>
                </div>
                <div className="card-img">
                  <img
                    className="card-img-item"
                    src={`${item.product_image.url}`}
                    alt=""
                  />
                </div>
                <div className="card-info">
                  <p>{item.product_price} €</p>
                  <p>{item.product_details[1]["TAILLE"]}</p>
                  <p>{item.product_details[1]["MARQUE"]}</p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default OfferWrap;
