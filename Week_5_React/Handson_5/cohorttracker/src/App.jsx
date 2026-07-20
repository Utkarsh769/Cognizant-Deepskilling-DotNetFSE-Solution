import CohortDetails from "./Components/CohortDetails";

function App() {
  const cohorts = [
    {
      name: "React",
      startDate: "10-Feb-2025",
      status: "Ongoing",
      coach: "John",
      trainer: "David",
    },

    {
      name: "Angular",
      startDate: "15-Jan-2025",
      status: "Completed",
      coach: "Mary",
      trainer: "Smith",
    },

    {
      name: "Java",
      startDate: "1-Dec-2024",
      status: "Ongoing",
      coach: "Alex",
      trainer: "Robert",
    },
  ];

  return (
    <div>
      <h1>Cognizant Academy Dashboard</h1>

      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
