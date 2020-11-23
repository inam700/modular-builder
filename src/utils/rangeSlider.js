import React from "react";

function RangeSlider({
  type,
  min,
  max,
  value,
  onChange,
  range,
  name,
  unit,
  onClickNegative,
  onClickPositve,
}) {
  return (
    <div className="range-slider">
      <button className="range-move-btn" onClick={onClickNegative}>
        <span>-</span> <br />
        {min}
        {unit}
      </button>
      <div
        className="range"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <p style={{ textAlign: "center", marginBottom: "20px" }}>
          {range}
          {unit}
        </p>
        <input
          className="range-input"
          type={type}
          name={name}
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          defaultValue="50"
        />
      </div>
      <button className="range-move-btn" onClick={onClickPositve}>
        <span>+</span>
        <br />
        {max}
        {unit}
      </button>
    </div>
  );
}

export default RangeSlider;
