import { createContext, useState, useEffect } from "react";

export const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
  const [recepVotes, setRecepVotes] = useState(
    () => JSON.parse(localStorage.getItem("recepVotes")) || 0
  );
  const [kemalVotes, setKemalVotes] = useState(
    () => JSON.parse(localStorage.getItem("kemalVotes")) || 0
  );
  const [gecersizVotes, setGecersizVotes] = useState(
    () => JSON.parse(localStorage.getItem("gecersizVotes")) || 0
  );
  const [reset, setReset] = useState(false);

  useEffect(() => {
    localStorage.setItem("recepVotes", JSON.stringify(recepVotes));
    localStorage.setItem("kemalVotes", JSON.stringify(kemalVotes));
    localStorage.setItem("gecersizVotes", JSON.stringify(gecersizVotes));
  }, [recepVotes, kemalVotes, gecersizVotes]);

  useEffect(() => {
    if (reset) {
      localStorage.clear(); // clear localStorage on reset
      setGecersizVotes(0);
      setKemalVotes(0);
      setRecepVotes(0);
      setReset(false);
    }
  }, [reset]);

  const resetVotes = () => {
    setReset(true);
  };

  const delayedVoteUpdate = (voteFunction) => {
    return (voteValue) => {
      voteFunction(voteValue);
      setTimeout(() => {}, 100);
    };
  };

  const totalVotes = recepVotes + kemalVotes + gecersizVotes;
  const validVotes = recepVotes + kemalVotes;

  return (
    <VoteContext.Provider
      value={{
        recepVotes,
        setRecepVotes: delayedVoteUpdate(setRecepVotes),
        kemalVotes,
        setKemalVotes: delayedVoteUpdate(setKemalVotes),
        gecersizVotes,
        setGecersizVotes: delayedVoteUpdate(setGecersizVotes),
        totalVotes,
        validVotes,
        resetVotes,
      }}
    >
      {children}
    </VoteContext.Provider>
  );
};
