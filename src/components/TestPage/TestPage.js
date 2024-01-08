import React from 'react';
import Navbar from '../Home/Navbar/Navbar';

const TestPage = () => {
    const apiResponse = JSON.parse(window.localStorage.getItem('apiResponse'));
    const questions = apiResponse.questions.test.questions;
    const selectedOptions = JSON.parse(window.localStorage.getItem('selectedOptions'));
    console.log(questions[0].options);

    return (
        <div>
            <Navbar />
            <div>
                Test
            </div>
            <div className='questions mt-7 ml-4'>
                {questions.map((question, index) => (
                    <div key={index} className ='mb-5'>
                        <p className='text-lg font-semibold'>{index + 1}. {question.question}</p>
                        {selectedOptions.quizType === 'multiple choice' && Object.entries(question.options).map(([key, value], i) => (
                            <div key={i} className='flex items-center'>
                                <input type='radio' id={`option${i}`} name={`question${index}`} value={value} />
                                <label htmlFor={`option${i}`} className='ml-2 mb-1'>{key}: {value}</label>
                            </div>
                        ))}
                        {selectedOptions.quizType === 'essay' && <textarea />}
                        {selectedOptions.quizType === 'short answer' && <input type='text' />}
                        {selectedOptions.quizType === 'true/false' && <input type='text' />}
                    </div>
                ))}
            </div>
            <div>
                <button type='button' className='black_btn mt-7'>Submit Test</button>
            </div>
        </div>
    );
}

export default TestPage;

const questionType = JSON.parse(window.localStorage.getItem('selectedOptions'));