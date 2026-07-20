import { players } from "./data";

import ListOfPlayers from "./Components/ListOfPlayers";
import ScoreBelow70 from "./Components/ScoreBelow70";
import IndianPlayers from "./Components/IndianPlayers";

function App() {
  const flag = false;

  if (flag) {
    return (
      <div>
        <h1>List Of Players</h1>

        <ListOfPlayers players={players} />

        <hr />

        <h1>List Of Players having Scores Less than 70</h1>

        <ScoreBelow70 players={players} />
      </div>
    );
  }

  return <IndianPlayers />;
}

export default App;
