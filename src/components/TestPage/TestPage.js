import React, { useState } from 'react';
import Navbar from '../Home/Navbar/Navbar';

const TestPage = () => {
    const apiResponse = JSON.parse(window.localStorage.getItem('apiResponse'));
    console.log(apiResponse);
    console.log(apiResponse.questions.test.questions)
    return (
        <div>
            <Navbar />
            <div>
                test
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