import { createContext, useState, useEffect } from "react";

export const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
  const getLocalStorage = (key, defaultValue) => {
    try {
      return JSON.parse(localStorage.getItem(key)) || defaultValue;
    } catch (error) {
      console.warn(`Failed to get ${key} from localStorage.`);
      return defaultValue;
    }
  };

  const setLocalStorage = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(`Failed to set ${key} to localStorage.`);
    }
  };

  const [recepVotes, setRecepVotes] = useState(() => getLocalStorage("recepVotes", 0));
  const [kemalVotes, setKemalVotes] = useState(() => getLocalStorage("kemalVotes", 0));
  const [gecersizVotes, setGecersizVotes] = useState(() => getLocalStorage("gecersizVotes", 0));
  const [reset, setReset] = useState(false);

  useEffect(() => {
    setLocalStorage("recepVotes", recepVotes);
    setLocalStorage("kemalVotes", kemalVotes);
    setLocalStorage("gecersizVotes", gecersizVotes);
  }, [recepVotes, kemalVotes, gecersizVotes]);

  useEffect(() => {
    if (reset) {
      try {
        localStorage.clear(); // clear localStorage on reset
      } catch (error) {
        console.warn("Failed to clear localStorage. Votes may persist between sessions.")
      }
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
      setTimeout(() => { }, 100);
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
