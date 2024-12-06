import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {counter}</h1>
        <button onClick={increment}>Increment</button>
      </header>
    </div>
  );
}

export default App;