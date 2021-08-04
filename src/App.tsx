import "./App.css";
import { MostBoringApp } from "./components/MostBoringApp";

function App() {
  const message = "Hello, SA Team!";

  return (
    <div className="App">
      <h1>{message}</h1>
      <MostBoringApp />
      <MostBoringApp initialValue={100} />
      <MostBoringApp initialValue={1000} />
      <MostBoringApp initialValue={Math.floor(Math.random() * 1000) + 1} />
    </div>
  );
}

export default App;
