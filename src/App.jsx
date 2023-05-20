import "./App.css";
// import Candidates from "./components/Candidates";
import Profile from "./components/Profile/Profile";
import ProfileVoteAdd from "./components/ProfileVoteAdd/ProfileVoteAdd";
import VoteCounter from "./components/VoteCounter/VoteCounter";
import { VoteProvider } from "./context/VoteContext";

function App() {
  return (
    <div className="app">
      <VoteProvider>
        <Profile />
        <VoteCounter />
        <ProfileVoteAdd />
      </VoteProvider>
    </div>
  );
}

export default App;
