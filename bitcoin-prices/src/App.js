import { Routes , Route, Link } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* creating nav tag */}
      <nav>
        {/* Link to our homepage */}
        <Link to ='/'>
        <h1>Global Bitcoin Prices</h1>
        {/* adding logo for header */}
        <img src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt="Bitcoint logo"></img>
        </Link>
      </nav>
<main>
  <Routes>
  <Route path='/' element={<Home/>} />
  </Routes>
</main>
    </div>
  );
}
export default App;
