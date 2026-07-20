import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

import Home from "./Components/Home";

import TrainersList from "./Components/TrainersList";

import TrainerDetails from "./Components/TrainerDetails";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link>

          {" | "}

          <Link to="/trainers">Trainer List</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />

          <Route path="/home" element={<Home />} />

          <Route path="/trainers" element={<TrainersList />} />

          <Route path="/trainer/:id" element={<TrainerDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
