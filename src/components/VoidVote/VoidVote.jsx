import "./VoidVote.scss";
import { VoteContext } from "../../context/VoteContext";
import { useContext } from "react";

import { HiOutlinePlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";

const VoidVote = () => {
  const { gecersizVotes, setGecersizVotes } = useContext(VoteContext);
  return (
    <div className="dashboard__container container">
      <div className="void__container">
        <div className="void__text">
          <h4>Geçersiz Oy</h4>
        </div>
        <div className="void_buttons ">
          <button
            className="void__minus_btn btn"
            onClick={() => {
              console.log(gecersizVotes);
              setGecersizVotes(gecersizVotes === 0 ? 0 : gecersizVotes - 1);
            }}
          >
            <HiMinus style={{ color: "white" }} />
          </button>
          <button
            className="void__plus_btn btn"
            onClick={() => {
              console.log(gecersizVotes);
              setGecersizVotes(gecersizVotes + 1);
            }}
          >
            <HiOutlinePlus style={{ color: "white" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoidVote;

//  <button
//             className="void__minus_btn"
//             onClick={() => {
//               console.log(gecersizVotes);
//               setGecersizVotes(gecersizVotes === 0 ? 0 : gecersizVotes - 1);
//             }}
//           >
//             <HiMinus style={{ color: "white" }} />
//           </button>
//
