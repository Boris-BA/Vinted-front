import { Range, getTrackBackground } from "react-range";
// import { useState } from "react";

const FilterRange = ({ values, setValues }) => {
  const STEP = 5;
  const MIN = 0;
  const MAX = 500;

  // const [values, setValues] = useState([20, 40]);

  return (
    <div
      className="filter-slide"
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={false}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "200px",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "#2baeb7", "#ccc"],
                  min: MIN,
                  max: MAX,
                  rtl: false,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "22px",
              width: "22px",
              borderRadius: "100%",
              backgroundColor: "#2baeb7",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
              border: "none",
              borderStyle: "none",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-28px",
                color: "white",
                fontWeight: "bold",
                fontSize: "14px",
                fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif",
                padding: "4px",
                borderRadius: "4px",
                backgroundColor: "#2baeb7",
              }}
            >
              {values[index]}
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default FilterRange;
