import { Link } from "react-router-dom";
import trainers from "../TrainersMock";

function TrainersList() {
  return (
    <div>
      <h1>Trainer List</h1>

      <ul>
        {trainers.map((trainer) => (
          <li key={trainer.trainerId}>
            <Link to={`/trainer/${trainer.trainerId}`}>{trainer.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainersList;
