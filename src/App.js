import Login from './components/Login';
import Dashboard from './components/Dashboard';

import {BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      
        {/* <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav> */}
          {/* <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/about' element={<AboutUs/>} />
            <Route path='/contact' element={<Contactus/>} />
            
            </Routes> */}

   <Router>
            <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/dashboard' element={<Dashboard/>} /> 
            </Routes> 
      </Router>


    </div>
  );
}

export default App;