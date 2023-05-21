import { createContext, useState } from "react";

export const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
  const [recepVotes, setRecepVotes] = useState(0);
  const [kemalVotes, setKemalVotes] = useState(0);
  const [gecersizVotes, setGecersizVotes] = useState(0);

  const totalVotes = recepVotes + kemalVotes + gecersizVotes;
  const validVotes = recepVotes + kemalVotes;

  return (
    <VoteContext.Provider
      value={{
        recepVotes,
        setRecepVotes,
        kemalVotes,
        setKemalVotes,
        gecersizVotes,
        setGecersizVotes,
        totalVotes,
        validVotes,
      }}
    >
      {children}
    </VoteContext.Provider>
  );
};
