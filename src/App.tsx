import React from "react";
import "./App.css";

function App() {
  const message = "Hello, SA Team!";

  const [value, setValue] = React.useState(0);

  const increment = () => {
    setValue(value + 1);
  };

  return (
    <div className="App">
      <h1>{message}</h1>
      <h3>The Most Boring App Ever</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
      <div>
        The current value is:
        <code>{value}</code>
      </div>
    </div>
  );
}

export default App;
