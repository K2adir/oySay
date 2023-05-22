import { useRef } from "react";
import "./App.css";
// import Candidates from "./components/Candidates";
import Profile from "./components/Profile/Profile";
import ProfileVoteAdd from "./components/ProfileVoteAdd/ProfileVoteAdd";
import Reset from "./components/Reset/Reset";
import Scores from "./components/Scores/Scores";
import VoidVote from "./components/VoidVote/VoidVote";
import VoteCounter from "./components/VoteCounter/VoteCounter";
import { VoteProvider } from "./context/VoteContext";
import exportAsImage from "./utils/exportAsImage";

function App() {
  const exportRef = useRef();

  return (
    <div className="app" ref={exportRef}>
      <VoteProvider>
        <Profile />
        <VoteCounter />
        <ProfileVoteAdd />

        <VoidVote />
        <Scores />
        <Reset />
      </VoteProvider>
      <button onClick={() => exportAsImage(exportRef.current, "oysayimi")} className="exportasimage">
        Ekran Görüntüsü Al
      </button>
    </div>
  );
}

export default App;
