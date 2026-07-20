function ScoreBelow70({ players }) {
  const players70 = players.filter((item) => item.score < 70);

  return (
    <>
      {players70.map((item, index) => (
        <div key={index}>
          <li>
            Mr. {item.name} <span>{item.score}</span>
          </li>
        </div>
      ))}
    </>
  );
}

export default ScoreBelow70;