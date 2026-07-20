import "./App.css";

function App() {
  const offices = [
    {
      id: 1,
      name: "DBS",
      rent: 50000,
      address: "Chennai",
      image: "/office.jpg",
    },
    {
      id: 2,
      name: "Regus",
      rent: 75000,
      address: "Bangalore",
      image: "/office.jpg",
    },
    {
      id: 3,
      name: "WeWork",
      rent: 45000,
      address: "Hyderabad",
      image: "/office.jpg",
    },
  ];

  return (
    <div className="container">
      <h1>Office Space, at Affordable Range</h1>

      {offices.map((office) => (
        <div className="card" key={office.id}>
          <img src={office.image} alt={office.name} />

          <h2>Name: {office.name}</h2>

          <h3
            style={{
              color: office.rent <= 60000 ? "red" : "green",
            }}
          >
            Rent: Rs. {office.rent}
          </h3>

          <h3>Address: {office.address}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
