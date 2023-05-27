import { useContext } from "react";
import { VoteContext } from "../../context/VoteContext";
import "./Inputs.scss";

const Inputs = () => {
  const { sandikNo, setSandikNo, okulAdi, setOkulAdi } =
    useContext(VoteContext);

  const handleSandikNoChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue === "Sandık#") {
      setSandikNo("");
    } else {
      setSandikNo(
        inputValue.startsWith("Sandık#") ? inputValue : `Sandık# ${inputValue}`
      );
    }
  };

  const handleSandikNoBlur = () => {
    if (sandikNo === "Sandık#") {
      setSandikNo("");
    }
  };

  const handleOkulAdiChange = (event) => {
    setOkulAdi(event.target.value);
  };

  return (
    <div className="dashboard__container input__container">
      <input
        className="input__input"
        placeholder="Okul Adı:"
        value={okulAdi}
        onChange={handleOkulAdiChange}
      />
      <input
        className="input__input"
        inputMode="numeric"
        pattern="[0-9]*"
        placeholder="Sandık No:"
        value={sandikNo}
        onChange={handleSandikNoChange}
        onBlur={handleSandikNoBlur}
      />
    </div>
  );
};

export default Inputs;
