import { useState } from "react";
import "./Inputs.scss";

const Inputs = () => {
  const [sandikNo, setSandikNo] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue === "Sandik #") {
      setSandikNo("");
    } else {
      setSandikNo(
        inputValue.startsWith("Sandik #")
          ? inputValue
          : `Sandik # ${inputValue}`
      );
    }
  };

  const handleInputBlur = () => {
    if (sandikNo === "Sandik #") {
      setSandikNo("");
    }
  };

  return (
    <div className="dashboard__container input__container">
      <input className="input__input" placeholder="Okul Adı:" />
      <input
        className="input__input"
        inputMode="numeric"
        pattern="[0-9]*"
        placeholder="Sandık No:"
        value={sandikNo}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
    </div>
  );
};

export default Inputs;
