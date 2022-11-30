import './App.css';
import List from './List';
import Clock from "./Clock"
import Welcome from './Welcome';

function App() {
  return (
    <div>
      <Clock date = {new Date()} />
      <Welcome name = "Charlie"/>
      <Welcome/>
      <List/>
    </div>
  );
}

export default App;
