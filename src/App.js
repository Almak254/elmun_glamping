
import './App.css';
import { BrowserRouter as Router  , Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'

import { Link } from 'react-router-dom';
import Signup from './componnets/Signup';
import Login from './componnets/Login';
import Homepage from './componnets/Homepage';
import ChatComponent from './componnets/bot/ChatComponent';
import Packages from './componnets/Packages';
import Journal from './componnets/Journal';
import Giftcards from './componnets/Giftcards';




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
        <nav className='text-centre'>
            <Link to={'/Homepage'} className='btn btn-danger m-2 px-4'>Home 🚪</Link>
            <Link to= {'/Signup'} className='btn btn-dark m-2 px-4'>Signup</Link>
            <Link to= {'/Login'} className='btn btn-secondary m-2 px-4'>Login</Link>
            <Link to= {'/ChatComponent'} className='btn btn-secondary m-2 px-4'>ChatBot</Link>
            <Link to= {'/Packages'} className='btn btn-secondary m-2 px-4'>Packages</Link>
            <Link to= {'/Journal'} className='btn btn-secondary m-2 px-4'>Journal</Link>
            <Link to= {'/Giftcards'} className='btn btn-secondary m-2 px-4'>Giftcards</Link>

        </nav>
          <Routes>
            <Route path='/Signup' Component={Signup}/>
            <Route path='/Login' Component={Login}/>      
            <Route path='/Homepage' Component={Homepage}/>
            <Route path='/ChatComponent' Component={ChatComponent}/>
            <Route path='/Packages' Component={Packages}/>
            <Route path='/Journal' Component={Journal}/>
            <Route path='/Giftcards' Component={Giftcards}/>
           
          </Routes>

      </div>
    </Router>
  );
}

export default App ;