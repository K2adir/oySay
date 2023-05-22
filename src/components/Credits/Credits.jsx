import { useState } from "react";
import "./Credits.scss";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const Credits = () => {
  const [showCredits, setShowCredits] = useState(false);
  return (
    <div className="credits__container">
      <button
        className={showCredits === true ? "credits_btn_up" : "credits_btn_down"}
        onClick={(e) => {
          setShowCredits(!showCredits);
        }}
      >
        {showCredits === false ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
      </button>
      <div
        className={
          showCredits === true ? "credits__content" : "credits__content_hide"
        }
      >
        <p>Kadir Kirisci: Code</p>
        <p>Deniz Turan: UI/UX</p>
      </div>
    </div>
  );
};

export default Credits;
