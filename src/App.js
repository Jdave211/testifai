import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Home/Navbar/Navbar';
import Info from './components/Home/Info/Info';
import KnowledgeBaseForm from './components/Home/KnowledgeBaseForm/KnowledgeBaseForm';
import ParametersDrop from './components/TestParameters/ParametersDrop';

function Home() {
  return (
    <div>
      <Navbar />
      <Info />
      <KnowledgeBaseForm />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parameters" element={<ParametersDrop />} />
        </Routes>
      </div>
    </Router> 
  );
}

export default App;