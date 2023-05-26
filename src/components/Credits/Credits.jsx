import { useState } from "react";
import "./Credits.scss";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

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
        <p>
          <span>
            Kadir Kirisci:
            <span className="credit__icon">
              <FiInstagram />
              <CiLinkedin />
              <FiGithub />
            </span>
          </span>
        </p>
        <p>
          <span>Deniz Turan:</span>
        </p>
        <p>
          <span className="credit__icon">
            <FiInstagram />
            <CiLinkedin />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Credits;
