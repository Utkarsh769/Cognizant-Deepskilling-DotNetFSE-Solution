import { useState } from "react";

function CurrencyConverter() {
  const [rupees, setRupees] = useState("");

  const [euro, setEuro] = useState("");

  const conversionRate = 90;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (rupees === "") {
      alert("Please enter amount");

      return;
    }

    const converted = (Number(rupees) / conversionRate).toFixed(2);

    setEuro(converted);

    alert(`Converting to Euro Amount is ${converted}`);
  };

  return (
    <div className="currency">
      <h1>Currency Convertor!!!</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount</label>

          <input
            type="number"
            value={rupees}
            onChange={(e) => setRupees(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Currency</label>

          <input type="text" value={euro} readOnly />
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CurrencyConverter;
