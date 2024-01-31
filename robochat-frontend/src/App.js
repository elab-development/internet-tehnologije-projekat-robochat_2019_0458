import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Pocetna from './components/pocetna/Pocetna';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>                
        <Route path="/" element={<Pocetna/>} />
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
