import "./VoteCounter.scss";

import { VoteContext } from "../../context/VoteContext";
import { useContext } from "react";

const VoteCounter = () => {
  const {
    recepVotes,

    kemalVotes,
  } = useContext(VoteContext);
  return (
    <>
      <div className="dashboard__container">
        <div className="voteCounter">
          <div className="voteCounter_name recep">
            <h5>RECEP TAYYİP ERDOĞAN</h5>
          </div>

          <div className="voteAmount">
            <h4>{recepVotes}</h4>
          </div>
        </div>
        <div className="voteCounter">
          <div className="voteCounter_name">
            <h5>KEMAL KILIÇDAROĞLU</h5>
          </div>
          <div className="voteAmount">
            <h4>{kemalVotes}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default VoteCounter;
