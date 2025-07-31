import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currency.toLowerCase() === 'euro') {
      const euroValue = amount / 90; // 1 Euro ≈ ₹90
      alert(`Converting to Euro: Amount is ${euroValue.toFixed(2)}`);
    } else {
      alert("Unsupported currency");
    }
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <h3 style={{ color: 'green' }}><b>Currency Convertor!!!</b></h3>
      <form onSubmit={handleSubmit}>
        <label>
          Amount: &nbsp;
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <br /><br />
        <label>
          Currency: &nbsp;
          <input
            type="text"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />
        </label>
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CurrencyConverter;
