import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//components
import NavigationBar from './components/Navbar';
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';
import AboutUs from './components/AboutUs';
import CreateBlog from './components/CreateBlog';

function App() {
  return (
    <div className="App">

      <Router>        
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />  
          <Route path='/create' element={<CreateBlog/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
