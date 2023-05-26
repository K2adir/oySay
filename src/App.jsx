import { Fragment, useRef } from "react";
import "./App.scss";
import Credits from "./components/Credits/Credits";
// import Candidates from "./components/Candidates";
import Profile from "./components/Profile/Profile";
import ProfileVoteAdd from "./components/ProfileVoteAdd/ProfileVoteAdd";
import Reset from "./components/Reset/Reset";
import Scores from "./components/Scores/Scores";
import VoidVote from "./components/VoidVote/VoidVote";
import VoteCounter from "./components/VoteCounter/VoteCounter";
import { VoteProvider } from "./context/VoteContext";
import exportAsImage from "./utils/exportAsImage";
import Inputs from "./components/Inputs/Inputs";

//
function App() {
  const exportRef = useRef();

  return (
    <div className="app">
      <VoteProvider>
        <div ref={exportRef} className="imageWrapper">
          <Profile />
          <VoteCounter />
          <ProfileVoteAdd />

          <VoidVote />
          <Scores />
          <Inputs />
        </div>
        <div className="reset__shot">
          <button
            onClick={() => exportAsImage(exportRef.current, "oysayimi")}
            className="exportasimage reset__button"
          >
            Ekran Görüntüsü
          </button>
          <Reset />
        </div>
      </VoteProvider>
      <Credits />
    </div>
  );
}

export default App;
