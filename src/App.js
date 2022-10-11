import { Button } from "@mui/material";
import "./App.css";
import Dashboard from "./component/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <h3>Welcome</h3>
      <Button variant="contained">Hello World</Button>
      <Dashboard />
    </div>
  );
}

export default App;
