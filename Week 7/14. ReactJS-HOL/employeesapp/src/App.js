// App.js
import './App.css'; 

import React, { useState } from 'react';
import EmployeesList from './EmployeesList';
import ThemeContext from './ThemeContext';

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <h1>Employee Management App</h1>
        <EmployeesList />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
