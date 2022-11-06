
import './App.css';
import Entertainment from './components/Entertainment';
import General from './components/General';
import Healths from './components/Healths';
import Navbar from './components/Navbar';
import Sceince from './components/Sceince';
import Sports from './components/Sports';
import Technology from './components/Technology';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Entertainment/>
      <General/>
      <Technology/>
      <Sports/>
      <Healths/>
      <Sceince/>
     
    </div>
  );
}

export default App;
