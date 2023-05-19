import { useState, useCallback } from "react";
import "./Candidates.scss";
import Recep from "../assets/receo.webp";
import Kemal from "../assets/kemo.webp";
import Gecersiz from "../assets/gecersiz.webp";

const useDebounce = (func, delay) => {
  const [isInvoking, setIsInvoking] = useState(false);

  const debouncedFunc = useCallback(() => {
    if (!isInvoking) {
      setIsInvoking(true);
      setTimeout(() => {
        func();
        setIsInvoking(false);
      }, delay);
    }
  }, [func, isInvoking, delay]);

  return debouncedFunc;
};

const CandidateProfile = ({
  imgSrc,
  imgAlt,
  voteCount,
  setVoteCount,
  totalVotes,
  setTotalVotes,
}) => {
  const incrementVote = useDebounce(() => {
    setVoteCount(voteCount + 1);
    setTotalVotes(totalVotes + 1);
  }, 180);

  const decrementVote = useDebounce(() => {
    if (voteCount > 0) {
      setVoteCount(voteCount - 1);
      setTotalVotes(totalVotes - 1);
    }
  }, 180);

  return (
    <div className="candidates__profile">
      <img className="candidates__image" src={imgSrc} alt={imgAlt} />
      <div className="candidates__buttons">
        <button
          className="candidates__button"
          onClick={incrementVote}
          aria-label="Increase vote"
        >
          Ekle
        </button>
        <h1>{voteCount}</h1>
        <button
          className="candidates__button"
          onClick={decrementVote}
          aria-label="Decrease vote"
        >
          Çıkar
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

  const resetVotes = () => {
    setRecepVotes(0);
    setKemalVotes(0);
    setGecersizVotes(0);
    setTotalVotes(0);
  };

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
        <h1>Toplam</h1>
        <h2>{totalVotes}</h2>
        <div className="candidates__buttons">
          <button className="candidates__save" aria-label="Save vote">
            Kayit et
          </button>
          <button
            className="candidates__save"
            onClick={resetVotes}
            aria-label="Reset vote"
          >
            Sifirla
          </button>
        </div>
      </div>
    </div>
  );
};

export default Candidates;
