import './App.css';
import Navbar from './Navbar';
import Fighters from './Fighters';

const title = "Choose Your Fighter";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <h1>{ title }</h1>
      </div>
      <Fighters />
    </div>
  );
}

export default App;
