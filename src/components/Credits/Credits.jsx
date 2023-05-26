import { useState } from "react";
import "./Credits.scss";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { FaCat } from "react-icons/fa";

const CREDITS_DATA = [
  {
    name: "Code - Kadir Kirisci:",
    links: [
      { url: "https://github.com/K2adir/oySay", icon: FiGithub },
      { url: "https://www.instagram.com/k2adir/", icon: FiInstagram },
    ],
  },
  {
    name: "UI - Deniz Turan:",
    links: [
      { url: "https://www.linkedin.com/in/deniz-t/", icon: BsLinkedin },
      { url: "https://instagram.com/b.denizturan", icon: FiInstagram },
    ],
  },
  // More credits can be added here
];

const Credits = () => {
  const [showCredits, setShowCredits] = useState(false);

  return (
    <div className="credits__container">
      <button
        className={showCredits ? "credits_btn_up" : "credits_btn_down"}
        onClick={() => setShowCredits(!showCredits)}
      >
        {showCredits ? <AiOutlineEyeInvisible /> : <FaCat />}
      </button>
      <div
        className={showCredits ? "credits__content" : "credits__content_hide"}
      >
        {CREDITS_DATA.map((credit, index) => (
          <div className="credits__bar" key={index}>
            <div className="credits__name">
              <p>{credit.name}</p>
            </div>
            <div className="credits__icon">
              {credit.links.map((link, linkIndex) => (
                <a href={link.url} target="_blank" key={linkIndex}>
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Credits;
