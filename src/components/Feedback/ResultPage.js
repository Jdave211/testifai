import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import ScoreCircle from './ScoreCircle';
import Remark from './Remark';

const ResultPage = () => {
    const percentageGrade = JSON.parse(window.localStorage.getItem('percenageGrade'));
    return (
        <div>
            <Navbar />
            <div className='mr-5 ml-5 mt-5'>
                <h1>Your Score is:</h1>
                <ScoreCircle percentageGrade={percentageGrade}/> 
                <div>
                <p className='underline'>Feedback</p>
                <Remark percentageGrade={percentageGrade}/>
                </div>
                <div className='flex justify-between'>
                    <button className='black_btn'>Restart Test</button>
                    <button className='white_btn'>Change Test Parameters</button>
                    <button className='black_btn'>New Test</button>
                </div>
            </div>
        </div>
    );
}

export default ResultPage;