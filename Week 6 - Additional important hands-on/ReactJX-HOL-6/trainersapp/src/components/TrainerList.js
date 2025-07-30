import { Link } from "react-router-dom";

function TrainerList({ trainers }) {
  return (
    <div>
      <h3>Trainers List</h3>
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

export default TrainerList;
