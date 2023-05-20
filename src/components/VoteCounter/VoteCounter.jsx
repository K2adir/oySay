import "./VoteCounter.scss";

import { VoteContext } from "../../context/VoteContext";
import { useContext } from "react";

const VoteCounter = () => {
  const {
    recepVotes,
    setRecepVotes,
    kemalVotes,
    setKemalVotes,
    gecersizVotes,
    setGecersizVotes,
    totalVotes,
  } = useContext(VoteContext);
  return (
    <>
      <div className="dashboard__container">
        <div className="voteCounter">
          <h5>Recep Tayyip Erdogan</h5>
          <div className="voteAmount">
            <h4>{recepVotes}</h4>
          </div>
        </div>
        <div className="voteCounter">
          <h5>Kemal Kilicdaroglu</h5>
          <div className="voteAmount">
            <h4>{kemalVotes}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default VoteCounter;
