import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Home/Navbar/Navbar';
import Info from './components/Home/Info/Info';
import KnowledgeBaseForm from './components/Home/KnowledgeBaseForm/KnowledgeBaseForm';
import ParametersDrop from './components/TestParameters/ParametersDrop';
import TestInfo from './components/TestPage/TestInfo';
import TestPage from './components/TestPage/TestPage';
import ResultPage from './components/Feedback/ResultPage';
import SignUp from './components/SignupLogin/SignUp';
import SignIn from './components/SignupLogin/SignIn';
import ParticlesBg from 'particles-bg';

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
      <div className='App' >
        <ParticlesBg color='#5F0A87' num={30} className='particles' type="cobweb" bg={true} style={{ zIndex: 0 }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/parameters" element={<ParametersDrop />} />
          <Route path="/testinf" element={<TestInfo />} />
          <Route path="/testpg" element={<TestPage />} />
          <Route path="/resultpg" element={<ResultPage />} />
        </Routes>
        <ParticlesBg color='#DDA0DD' num={40} className='particles' type="cobweb" bg={true} style={{ zIndex: 1 }} />
      </div>
    </Router> 
  );
}

export default App;