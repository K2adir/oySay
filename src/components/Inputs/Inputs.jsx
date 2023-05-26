import "./Inputs.scss";
import React from "react";

const Inputs = () => {
  return (
    <div className="dashboard__container input__container">
      <input className="input__input" placeholder="Okul Adı:" />
      <input
        className="input__input"
        // type="number"
        inputMode="numeric"
        pattern="[0-9]*"
        placeholder="Sandık No:"
      />
    </div>
  );
};

export default Inputs;
