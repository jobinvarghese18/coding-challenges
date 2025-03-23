import ProgressBar from "../src/challenges/ProgressBar/ProgressBar";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <ProgressBar count={50} />
      <ProgressBar count={75} />
      <ProgressBar count={10} />
    </div>
  );
}

export default App;
