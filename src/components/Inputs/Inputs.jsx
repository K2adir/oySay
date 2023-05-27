import { useContext } from "react";
import { VoteContext } from "../../context/VoteContext";
import "./Inputs.scss";
import { MdHowToVote } from "react-icons/md";
import { TbSchool } from "react-icons/tb";

const Inputs = () => {
  const { sandikNo, setSandikNo, okulAdi, setOkulAdi } =
    useContext(VoteContext);

  const handleOkulAdiChange = (event) => {
    setOkulAdi(event.target.value);
  };

  const handleSandikNoChange = (event) => {
    setSandikNo(event.target.value);
  };

  return (
    <div className="input__container">
      <div className="input__okul">
        <label htmlFor="" className="input__label">
          <TbSchool className="input__icon" />
        </label>
        <input
          className="input__input "
          placeholder="Okul Adı"
          value={okulAdi}
          onChange={handleOkulAdiChange}
        />
      </div>
      <div className="input__sandik">
        <label htmlFor="" className="input__label input__label-gap">
          <MdHowToVote className="input__icon" />
        </label>
        <input
          className="input__input"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Sandık No"
          value={sandikNo}
          onChange={handleSandikNoChange}
        />
      </div>
    </div>
  );
};

export default Inputs;
