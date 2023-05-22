import "./Profile.scss";
import Kemal from "../../assets/kemo.webp";
import Recep from "../../assets/receo.webp";

const Profile = () => {
  return (
    <div className="dashboard__container">
      <img src={Recep} alt="RECEP TAYYİP ERDOĞAN" />
      <img src={Kemal} className="profile__kemal" alt="KEMAL KILIÇDAROĞLU" />
    </div>
  );
};

export default Profile;
