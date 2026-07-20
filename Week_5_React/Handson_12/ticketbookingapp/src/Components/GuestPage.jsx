import FlightList from "./FlightList";

function GuestPage() {
  return (
    <div>
      <h1>Welcome Guest</h1>

      <h3>You can browse available flights.</h3>

      <FlightList />

      <p>Login to book your tickets.</p>
    </div>
  );
}

export default GuestPage;
