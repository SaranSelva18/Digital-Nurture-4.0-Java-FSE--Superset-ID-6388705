import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./components/Home";
import TrainerList from "./components/TrainerList";
import TrainerDetail from "./components/TrainerDetail";
import trainersMock from "./data/TrainersMock";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h2>My Academy Trainers App</h2>
        <nav>
          <Link to="/">Home</Link> | <Link to="/trainers">Show Trainers</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/trainers" element={<TrainerList trainers={trainersMock} />} />
          <Route path="/trainer/:id" element={<TrainerDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
