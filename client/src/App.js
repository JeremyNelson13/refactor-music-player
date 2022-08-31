import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//components
import NavigationBar from './components/Navbar';
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';


function App() {
  return (
    <div className="App">

      <Router>        
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
