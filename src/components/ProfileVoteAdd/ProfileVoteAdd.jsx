import { VoteContext } from "../../context/VoteContext";
import { useContext } from "react";
import "./ProfileVoteAdd.scss";
import { HiOutlinePlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";

const ProfileVoteAdd = () => {
  const {
    recepVotes,
    setRecepVotes,
    kemalVotes,
    setKemalVotes,
    gecersizVotes,
    setGecersizVotes,
  } = useContext(VoteContext);

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
      {/* // VOID */}

      <div className="vote__void">
        <div className="vote__void_text">
          <h4>GECERSIZ OY</h4>
        </div>
        <div className="vote__void_buttons">
          <button
            className="void__minus_btn"
            onClick={() => {
              console.log(gecersizVotes);
              setGecersizVotes(gecersizVotes === 0 ? 0 : gecersizVotes - 1);
            }}
          >
            <HiMinus style={{ color: "white" }} />
          </button>
          <button
            className="void__plus_btn"
            onClick={() => {
              console.log(gecersizVotes);
              setGecersizVotes(gecersizVotes + 1);
            }}
          >
            <HiOutlinePlus style={{ color: "white" }} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileVoteAdd;
