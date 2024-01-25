import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import ScoreCircle from './ScoreCircle';

const ResultPage = () => {
    return (
        <div>
            <Navbar />
            <div>
                <h1>Result Page</h1>
                <ScoreCircle /> 
            </div>
        </div>
    );
}

export default ResultPage;