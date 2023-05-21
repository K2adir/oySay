import { createContext, useState, useEffect } from "react";

export const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
  const [recepVotes, setRecepVotes] = useState(0);
  const [kemalVotes, setKemalVotes] = useState(0);
  const [gecersizVotes, setGecersizVotes] = useState(0);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if (reset) {
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
