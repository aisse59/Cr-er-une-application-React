
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {


  return (
    <div className="App">
    <Navbar/>
      <div className="contenu">
       <Home/>
      </div>
    </div>
  );
}

export default App;