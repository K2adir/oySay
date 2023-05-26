import { useState } from "react";
import "./Credits.scss";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";

const Credits = () => {
  const [showCredits, setShowCredits] = useState(false);

  return (
    <div className="credits__container">
      <button
        className={showCredits ? "credits_btn_up" : "credits_btn_down"}
        onClick={() => setShowCredits(!showCredits)}
      >
        {showCredits ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
      </button>
      <div
        className={showCredits ? "credits__content" : "credits__content_hide"}
      >
        <div className="credits__name">
          <p>Kadir Kirisci:</p>
        </div>
        <div className="credits__icon">
          <AiOutlineLinkedin />
          <FiInstagram />
          <FiGithub />
        </div>
      </div>
    </div>
  );
};

export default Credits;
