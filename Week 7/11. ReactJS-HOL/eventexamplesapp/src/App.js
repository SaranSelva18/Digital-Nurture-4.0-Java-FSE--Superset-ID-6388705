import React, { useState } from 'react';
import CurrencyConverter from './CurrencyConverter';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayHello = () => {
    alert("Hello Saran!");
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleClick = () => {
    alert("I was clicked");
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>&nbsp;
      <button onClick={decrement}>Decrement</button>&nbsp;
      <button onClick={() => sayWelcome("welcome")}>Say welcome</button>&nbsp;
      <button onClick={handleClick}>Click on me!</button>

      <CurrencyConverter />
    </div>
  );
}

export default App;
