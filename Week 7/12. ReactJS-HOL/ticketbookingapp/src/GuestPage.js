import React from 'react';

function GuestPage({ onLogin }) {
  return (
    <div>
      <h2>Please sign up.</h2>
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

export default GuestPage;
