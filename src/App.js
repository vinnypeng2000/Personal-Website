import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import {Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (    
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
            </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
