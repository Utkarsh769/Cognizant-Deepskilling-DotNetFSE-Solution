import { useState } from "react";

import GuestPage from "./Components/GuestPage";
import UserPage from "./Components/UserPage";

import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  let page;

  if (loggedIn) {
    page = <UserPage />;
  } else {
    page = <GuestPage />;
  }

  return (
    <div className="container">
      <h1>Ticket Booking Application</h1>

      <div className="buttons">
        <button onClick={() => setLoggedIn(true)}>Login</button>

        <button onClick={() => setLoggedIn(false)}>Logout</button>
      </div>

      <hr />

      {page}
    </div>
  );
}

export default App;
