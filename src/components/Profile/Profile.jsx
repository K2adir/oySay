import "./Profile.scss";
import Kemal from "../../assets/kemo.webp";
import Recep from "../../assets/receo.webp";

const Profile = () => {
  return (
    <div className="dashboard__container">
      <img src={Recep} alt="recep tayyip erdogan" />
      <img src={Kemal} className="profile__kemal" alt="kemal kilicdaroglu" />
    </div>
  );
};

export default Profile;
