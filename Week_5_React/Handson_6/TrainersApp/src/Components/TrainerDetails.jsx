import { useParams } from "react-router-dom";
import trainers from "../TrainersMock";

function TrainerDetails() {
  const { id } = useParams();

  const trainer = trainers.find((trainer) => trainer.trainerId === Number(id));

  if (!trainer) return <h2>Trainer Not Found</h2>;

  return (
    <div>
      <h1>Trainer Details</h1>

      <hr />

      <h3>Name : {trainer.name}</h3>

      <h3>ID : {trainer.trainerId}</h3>

      <h3>Email : {trainer.email}</h3>

      <h3>Phone : {trainer.phone}</h3>

      <h3>Technology : {trainer.technology}</h3>

      <h3>Skills : {trainer.skills}</h3>
    </div>
  );
}

export default TrainerDetails;
