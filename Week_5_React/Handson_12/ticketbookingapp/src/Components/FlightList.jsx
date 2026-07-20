function FlightList() {
  const flights = [
    {
      id: 1,
      flight: "IndiGo 6E-203",
      from: "Chennai",
      to: "Bangalore",
      fare: 4200,
    },

    {
      id: 2,
      flight: "Air India AI-402",
      from: "Delhi",
      to: "Mumbai",
      fare: 6800,
    },

    {
      id: 3,
      flight: "Vistara UK-811",
      from: "Hyderabad",
      to: "Kolkata",
      fare: 5100,
    },
  ];

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Flight</th>
          <th>From</th>
          <th>To</th>
          <th>Fare</th>
        </tr>
      </thead>

      <tbody>
        {flights.map((flight) => (
          <tr key={flight.id}>
            <td>{flight.flight}</td>

            <td>{flight.from}</td>

            <td>{flight.to}</td>

            <td>₹ {flight.fare}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FlightList;
