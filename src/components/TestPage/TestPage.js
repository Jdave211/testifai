import React, {useState, useEffect} from 'react';
import Navbar from '../Home/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const TestPage = () => {
    const apiResponse = JSON.parse(window.localStorage.getItem('apiResponse'));
    console.log(apiResponse);
    const questions = apiResponse.questions;
    console.log(questions);
    const selectedParams = JSON.parse(window.localStorage.getItem('selectedOptions'));
    console.log(selectedParams);
    const quizType = selectedParams.quizType;
    const [userResponses, setUserResponses] = useState({});
    const [selectedOptions, setSelectedOptions] = useState({});  



    return (
        <div> 
            <Navbar /> 
            <div className="container mx-auto mt-4"> 
                <form onSubmit={(e) => { e.preventDefault(); if (Object.keys(selectedOptions).length !== questions.length) {alert('Please answer all questions before submitting.');return;}/* Add Submit Logic Here */ }}>
                    <div className="mb-6"> 
                        {questions.map((question) => (
                            <div key={question.number} className="mb-8 border rounded-lg p-6 shadow-md"> 
                                <h3 className="text-lg font-medium mb-4">
                                    {question.number}. {question.question}
                                </h3>
                                <ul className="grid grid-cols-2 gap-4"> 
                                    {Object.entries(question.options).map(([optionKey, optionText]) => (
                                        <li key={optionKey}>
                                            <label className="flex items-center space-x-3"> 
                                                <input 
                                                    type="radio" 
                                                    name={`question-${question.number}`} 
                                                    value={optionKey} 
                                                    checked={selectedOptions[question.number] === optionKey}
                                                    onChange={(e) => { 
                                                        setSelectedOptions({
                                                            ...selectedOptions, 
                                                            [question.number]: e.target.value 
                                                        });
                                                    }}
                                                    className="w-5 h-5 accent-indigo-500"
                                                />
                                                <span className="text-base">{optionText}</span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <button type="submit" className="fixed bottom-4 right-4 bg-indigo-500 hover:bg-transparent hover:border-black hover:text-black text-white text-base font-medium py-3 px-6 rounded-lg border">
                        Submit Quiz
                    </button>
                </form>
            </div>
        </div>
    );
    
}

export default TestPage;
