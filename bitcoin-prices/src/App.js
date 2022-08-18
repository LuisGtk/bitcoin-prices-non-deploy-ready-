import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Currencies from './components/Currencies/Currencies';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* creating nav tag */}
      <nav>
        {/* Link to our homepage */}
        <Link to='/'>
          <h1>Global Crypto Prices</h1>
          {/* adding logo for header */}
          <img src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt="Bitcoinlogo"></img>
        </Link>
        <Link to='/Currencies'>
          <h1>Currencies</h1>
        </Link>
      </nav>
      {/* the main tag contains the paths the applicatuion takes you to after clicking one of the many links */}
      <main>
        {/* container for the route elements */}
        <Routes>
          {/* route path specifies which component a link will take you */}
          <Route path='/' element={<Home />} />
          <Route path="/Currencies" element={<Currencies />} />
        </Routes>
      </main>
    </div>
  );
}


export default App;
