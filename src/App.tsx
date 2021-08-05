import "./App.css";
import { MostBoringApp } from "./components/MostBoringApp";
import { StarWarsWidget } from "./components/StarWarsWidget";

function App() {
  const message = "Hello, SA Team!";

  return (
    <div className="App">
      <h1>{message}</h1>
      <MostBoringApp />
      <hr />
      <StarWarsWidget />
    </div>
  );
}

export default App;
