const Filter = ({ filterAsc, setFilterAsc }) => {
  return (
    <div className="filter container">
      <span>Femmes</span> <span>Homme</span> <span>Enfants</span>
      <span>Maison</span> <span>Divertissement</span>
      <span>Trier par prix :</span>
      <input
        onChange={(event) => {
          console.log(event.target.checked);
          if (event.target.checked === false) {
            setFilterAsc("price-asc");
          } else {
            setFilterAsc("price-desc");
          }
        }}
        type="checkbox"
        value={filterAsc}
        name="filterAsc"
        checked={null}
      ></input>
    </div>
  );
};

export default Filter;
