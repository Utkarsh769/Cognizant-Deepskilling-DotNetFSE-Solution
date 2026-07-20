import FlightList from "./FlightList";

function UserPage() {
  return (
    <div>
      <h1>Welcome User</h1>

      <h3>You can now book your tickets.</h3>

      <FlightList />

      <button>Book Ticket</button>
    </div>
  );
}

export default UserPage;
