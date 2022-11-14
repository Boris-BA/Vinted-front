import FilterRange from "./FilterRange";

const Filter = ({ filterAsc, setFilterAsc, values, setValues }) => {
  return (
    <div className="filter container">
      <div className="filter-left">
        <span className="filter-toggle">Trier par prix décroissant </span>
        <input
          className="filter-toggle"
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
      <div>{/* //FIlTER REACT RANGE */}</div>
      <FilterRange values={values} setValues={setValues}></FilterRange>
    </div>
  );
};

export default Filter;
