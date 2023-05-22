import "./App.css";
import Credits from "./components/Credits/Credits";
// import Candidates from "./components/Candidates";
import Profile from "./components/Profile/Profile";
import ProfileVoteAdd from "./components/ProfileVoteAdd/ProfileVoteAdd";
import Reset from "./components/Reset/Reset";
import Scores from "./components/Scores/Scores";
import VoidVote from "./components/VoidVote/VoidVote";
import VoteCounter from "./components/VoteCounter/VoteCounter";
import { VoteProvider } from "./context/VoteContext";

function App() {
  return (
    <div className="app">
      <VoteProvider>
        <Profile />
        <VoteCounter />
        <ProfileVoteAdd />

        <VoidVote />
        <Scores />
        <Reset />
      </VoteProvider>
      <Credits />
    </div>
  );
}

export default App;
