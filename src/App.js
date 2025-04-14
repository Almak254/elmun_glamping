
import './App.css';
import { BrowserRouter as Router  , Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'

import { Link } from 'react-router-dom';
import Signup from './componnets/Signup';
import Login from './componnets/Login';
import Homepage from './componnets/Homepage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <h2>
          <span className='img1'><img src='assets/images/food 2.jpeg' alt='headering' className='img1' ></img></span>
          El-Mun Glamping
          </h2>
        </header>
        <nav>
        <Link to={'/Homepage'} className='btn btn-danger m-2 px-4'>Home 🚪</Link>
        <Link to= {'/Signup'} className='btn btn-dark m-2 px-4'>Signup</Link>
        <Link to= {'/Login'} className='btn btn-secondary m-2 px-4'>Login</Link>
        </nav>
          <Routes>
            <Route path='/signup' Component={Signup}/>
            <Route path='/login' Component={Login}/>      
            <Route path='/homepage' Component={Homepage}/>
          </Routes>

      </div>
    </Router>
  );
}

export default App;

