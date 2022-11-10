const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-absolute">
        <p className="banner-text">Prêts à faire du tri dans vos placards ?</p>
        <button className="banner-btn">Commencer à vendre</button>
      </div>

      <img
        className="banner-img"
        src="https://static.vinted.com/assets/seller-promotion/gender_test/b/banner-wide-b31e1e250bf33255b4014ead6799dad6546dcc18dedad6925ba79a616cb676e6.jpg"
        alt=""
      />
    </div>
  );
};

export default Banner;
