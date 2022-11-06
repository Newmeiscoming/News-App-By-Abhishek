
import './App.css';
import Entertainment from './components/Entertainment';
import General from './components/General';
import Navbar from './components/Navbar';
import Sports from './components/Sports';
import Technology from './components/Technology';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Entertainment/>
      <General/>
      <Technology/>
     
    </div>
  );
}

export default App;
