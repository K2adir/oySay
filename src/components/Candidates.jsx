import { useState, useCallback } from "react";
import "./Candidates.scss";
import Recep from "../assets/receo.webp";
import Kemal from "../assets/kemo.webp";
import Gecersiz from "../assets/gecersiz.webp";

const CandidateProfile = ({
  imgSrc,
  imgAlt,
  voteCount,
  setVoteCount,
  totalVotes,
  setTotalVotes,
}) => {
  const [isVoteBtnDisabled, setIsVoteBtnDisabled] = useState(false);

  const debounce = (func, delay = 300) => {
    let timeoutId;
    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply();
        setIsVoteBtnDisabled(false);
      }, delay);
    };
  };

  const incrementVote = useCallback(
    debounce(() => {
      setVoteCount(voteCount + 1);
      setTotalVotes(totalVotes + 1);
    }),
    [voteCount, totalVotes]
  );

  const decrementVote = useCallback(
    debounce(() => {
      if (voteCount > 0) {
        setVoteCount(voteCount - 1);
        setTotalVotes(totalVotes - 1);
      }
    }),
    [voteCount, totalVotes]
  );

  return (
    <div className="candidates__profile">
      <img className="candidates__image" src={imgSrc} alt={imgAlt} />
      <div className="candidates__buttons">
        <button
          className="candidates__button"
          onClick={incrementVote}
          disabled={isVoteBtnDisabled}
          aria-label="Increase vote"
        >
          +
        </button>
        <h1>{voteCount}</h1>
        <button
          className="candidates__button"
          onClick={decrementVote}
          disabled={isVoteBtnDisabled}
          aria-label="Decrease vote"
        >
          -
        </button>
      </div>
    </div>
  );
};

const Candidates = () => {
  const [recepVotes, setRecepVotes] = useState(0);
  const [kemalVotes, setKemalVotes] = useState(0);
  const [gecersizVotes, setGecersizVotes] = useState(0);
  const [totalVotes, setTotalVotes] = useState(
    recepVotes + kemalVotes + gecersizVotes
  );

  const candidateData = [
    {
      src: Recep,
      alt: "Recep Tayyip Erdogan",
      voteCount: recepVotes,
      setVoteCount: setRecepVotes,
    },
    {
      src: Kemal,
      alt: "Kemal Kilicdaroglu",
      voteCount: kemalVotes,
      setVoteCount: setKemalVotes,
    },
    {
      src: Gecersiz,
      alt: "Gecersiz Oy",
      voteCount: gecersizVotes,
      setVoteCount: setGecersizVotes,
    },
  ];

  return (
    <div className="candidates__container">
      {candidateData.map((candidate, index) => (
        <CandidateProfile
          key={index}
          imgSrc={candidate.src}
          imgAlt={candidate.alt}
          voteCount={candidate.voteCount}
          setVoteCount={candidate.setVoteCount}
          totalVotes={totalVotes}
          setTotalVotes={setTotalVotes}
        />
      ))}

      {/* // void */}
      <div className="candidates__profile">
        <h1>Toplam Oy</h1>
        <h2>{totalVotes}</h2>
        <div className="candidates__buttons">
          <button className="candidates__save" aria-label="Save vote">
            Kayit et
          </button>
          <button className="candidates__save" aria-label="Reset vote">
            Sifirla
          </button>
        </div>
      </div>
    </div>
  );
};

export default Candidates;
