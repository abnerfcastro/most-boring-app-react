import React from "react";
import "./App.css";

function MostBoringApp() {
  const [value, setValue] = React.useState(0);

  const onClickHandler = ({ target }: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = target as HTMLButtonElement;
    switch (name) {
      case "increment":
        setValue(value + 1);
        break;
      case "decrement":
        setValue(value - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h3>The Most Boring App Ever</h3>
      <button
        style={{ marginRight: "5px" }}
        onClick={onClickHandler}
        name="increment"
      >
        Increment
      </button>
      <button name="decrement" onClick={onClickHandler}>
        Decrement
      </button>
      <div>
        The current value is:
        <code>{value}</code>
      </div>
    </div>
  );
}

function App() {
  const message = "Hello, SA Team!";

  return (
    <div className="App">
      <h1>{message}</h1>
      <MostBoringApp />
    </div>
  );
}

export default App;
