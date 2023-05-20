import { VoteContext } from "../../context/VoteContext";
import { useContext } from "react";
import "./ProfileVoteAdd.scss";
import { HiOutlinePlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";

const ProfileVoteAdd = () => {
  const { recepVotes, setRecepVotes, kemalVotes, setKemalVotes } =
    useContext(VoteContext);

  return (
    <>
      <div className="dashboard__container">
        <button
          className="profile__add_btn"
          onClick={() => setRecepVotes(recepVotes + 1)}
        >
          <HiOutlinePlus style={{ color: "white" }} />
        </button>
        <button
          className="profile__add_btn"
          onClick={() => setKemalVotes(kemalVotes + 1)}
        >
          <HiOutlinePlus style={{ color: "white" }} />
        </button>
      </div>
      {/* // */}
      {/* // */}
      {/* // */}
      <div className="dashboard__container">
        <button
          className="profile__minus_btn"
          onClick={() => setRecepVotes(recepVotes === 0 ? 0 : recepVotes - 1)}
        >
          <HiMinus style={{ color: "white" }} />
        </button>
        <button
          className="profile__minus_btn"
          onClick={() => setKemalVotes(kemalVotes === 0 ? 0 : kemalVotes - 1)}
        >
          <HiMinus style={{ color: "white" }} />
        </button>
      </div>
    </>
  );
};

export default ProfileVoteAdd;
