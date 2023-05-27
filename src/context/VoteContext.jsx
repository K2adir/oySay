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

  const [recepVotes, setRecepVotes] = useState(() =>
    getLocalStorage("recepVotes", 0)
  );
  const [kemalVotes, setKemalVotes] = useState(() =>
    getLocalStorage("kemalVotes", 0)
  );
  const [gecersizVotes, setGecersizVotes] = useState(() =>
    getLocalStorage("gecersizVotes", 0)
  );
  const [reset, setReset] = useState(false);
  const [sandikNo, setSandikNo] = useState(() =>
    getLocalStorage("sandikNo", "")
  );
  const [okulAdi, setOkulAdi] = useState(() => getLocalStorage("okulAdi", ""));

  useEffect(() => {
    setLocalStorage("recepVotes", recepVotes);
  }, [recepVotes]);

  useEffect(() => {
    setLocalStorage("kemalVotes", kemalVotes);
  }, [kemalVotes]);

  useEffect(() => {
    setLocalStorage("gecersizVotes", gecersizVotes);
  }, [gecersizVotes]);

  useEffect(() => {
    setLocalStorage("sandikNo", sandikNo);
  }, [sandikNo]);

  useEffect(() => {
    setLocalStorage("okulAdi", okulAdi);
  }, [okulAdi]);

  useEffect(() => {
    if (reset) {
      try {
        localStorage.clear();
      } catch (error) {
        console.warn("Failed to clear localStorage.");
      }
      setRecepVotes(0);
      setKemalVotes(0);
      setGecersizVotes(0);
      setSandikNo("");
      setOkulAdi("");
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
        sandikNo,
        setSandikNo: delayedVoteUpdate(setSandikNo),
        okulAdi,
        setOkulAdi: delayedVoteUpdate(setOkulAdi),
      }}
    >
      {children}
    </VoteContext.Provider>
  );
};
