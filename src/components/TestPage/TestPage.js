import React from 'react';
import Navbar from '../Home/Navbar/Navbar';

const TestPage = () => {
    const apiResponse = JSON.parse(window.localStorage.getItem('apiResponse'));
    const questions = apiResponse.questions.test.questions;
    const selectedOptions = JSON.parse(window.localStorage.getItem('selectedOptions'));

    return (
        <div>
            <Navbar />
            <div>
                Test
            </div>
            <div className='questions mt-7 ml-4'>
                {questions.map((question, index) => (
                <div key={index} className ='mb-7 mt-12'>
                    <p className='text-lg font-semibold'>{index + 1}. {question.question}</p>
                    {selectedOptions.quizType === 'multiple choice' && question.options && typeof question.options === 'object' && Object.entries(question.options).map(([key, value], i) => (
                        <div key={i} className='flex items-center'>
                            <input type='radio' id={`option${i}`} name={`question${index}`} value={value} />
                            <label htmlFor={`option${i}`} className='ml-2 mb-1'>{key}: {value}</label>
                        </div>
                    ))}
                    {selectedOptions.quizType === 'essay' && <textarea className='w-1/2 mt-4 rounded'/>}
                    {selectedOptions.quizType === 'short answer' && <input type='text' className='w-1/3 mt-4 rounded'/>}
                    {selectedOptions.quizType === 'true/false' && question.options && typeof question.options === 'object' && Object.entries(question.options).map(([key, value], i) => (
                        <div key={i} className='flex items-center'>
                            <input type='radio' id={`option${i}`} name={`question${index}`} value={value} />
                            <label htmlFor={`option${i}`} className='ml-2 mb-1'>{key}: {value}</label>
                        </div>
                    ))}
                    {index !== questions.length - 1 && <hr className='border-t border-gray-200 my-4' />}
                </div>
            ))}
            </div>
            <div className='text-right'>
                <button type='button' className='black_btn mt-16 mb-7 mr-3'>Submit Test</button>
            </div>
        </div>
    );
}

export default TestPage;

const questionType = JSON.parse(window.localStorage.getItem('selectedOptions'));