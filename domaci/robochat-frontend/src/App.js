import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Pocetna from './components/pocetna/Pocetna';
import ONama from './components/aboutUs/ONama';
import Footer from './components/footer/Footer';

import Robochat from './components/robochat/Robochat';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>                
        <Route path="/" element={<Pocetna/>} />
        <Route path="/onama" element={<ONama/>} />
        <Route path="/chatbot" element={<Robochat/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
