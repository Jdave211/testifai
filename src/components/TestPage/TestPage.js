import React, { useState } from 'react';
import Navbar from '../Home/Navbar/Navbar';

const TestPage = () => {
    const apiResponse = JSON.parse(window.localStorage.getItem('apiResponse'));
    const questions = apiResponse.questions.test.questions;
    // console.log(apiResponse);
    const no_1 = apiResponse.questions.test.questions[0].question;
    return (
        <div>
            <Navbar />
            <div className='questions text-lg'>
            {questions.map((question, index) => (
                    <p key={index}>{index + 1}. {question.question}</p>
                ))}
            </div>
            <div>
                <button
                type='button'
                className='black_btn'>
                    Submit Test
                </button>
            </div>
        </div>
    );
}

export default TestPage;