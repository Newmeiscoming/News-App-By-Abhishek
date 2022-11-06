
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Loginpage from './pages/Loginpage';
import Mainpage from './pages/Mainpage';
import Navbar from './components/Navbar';
import Register from '../src/pages/Register';



function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Loginpage />}/>
        <Route path='/' element={<Mainpage/>}/>
      </Routes>
      
     
    </div>
  );
}

export default App;
