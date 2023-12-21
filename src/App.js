import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Info from './components/Info/Info';
import KnowledgeBaseForm from './components/KnowledgeBaseForm/KnowledgeBaseForm';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Info />
      <KnowledgeBaseForm />
    </div>
  );
}

export default App;
