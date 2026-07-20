import { IndianTeam, IndianPlayers } from "../data";

import OddPlayers from "./OddPlayers";
import EvenPlayers from "./EvenPlayers";
import ListOfIndianPlayers from "./ListOfIndianPlayers";

function IndianPlayerComponent() {
  return (
    <div>
      <h1>Odd Players</h1>
      <OddPlayers team={IndianTeam} />

      <hr />

      <h1>Even Players</h1>
      <EvenPlayers team={IndianTeam} />

      <hr />

      <h1>List of Indian Players Merged</h1>
      <ListOfIndianPlayers IndianPlayers={IndianPlayers} />
    </div>
  );
}

export default IndianPlayerComponent;
