import React, {useState, useEffect} from 'react';
import Navbar from '../Home/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const TestPage = () => {
    const navigate = useNavigate();
    const apiResponse = JSON.parse(window.localStorage.getItem('apiResponse'));
    let questions = apiResponse.questions;
    const selectedParams = JSON.parse(window.localStorage.getItem('selectedOptions'));
    const quizType = selectedParams.quizType;
    const [userResponses, setUserResponses] = useState({});
    const [selectedOptions, setSelectedOptions] = useState({});
    const [submitted, setSubmitted] = useState(false);

    if (quizType === "true/false") {
        questions = apiResponse.questions.questions;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Ensure all questions are answered
        if (Object.keys(selectedOptions).length !== questions.length) {
            alert('Please answer all questions before submitting.');
            return;
        }

        // Initialize score
        let score = 0;

        // Check each answer
        for (let i = 0; i < questions.length; i++) {
            if (selectedOptions[questions[i].number] === questions[i].answer) {
                score++;
            }
        }

        // Display score
        alert(`Your score is ${score} out of ${questions.length}`);

        // Mark quiz as submitted
        setSubmitted(true);
    };

    const handleNewQuiz = () => {
        navigate('/');
    };

    return (
        <div> 
            <Navbar /> 
            <div className="container mx-auto mt-4"> 
                <form onSubmit={handleSubmit}>
                    <div className="mb-6"> 
                        {questions.map((question) => (
                            <div key={question.number} className="mb-8 border rounded-lg p-6 shadow-md"> 
                                <h3 className="text-lg font-medium mb-4">
                                    {question.number}. {question.question}
                                </h3>
                                <ul className="grid grid-cols-2 gap-4"> 
                                    {Object.entries(question.options).map(([optionKey, optionText]) => (
                                        <li key={optionKey}>
                                            <label className={`flex items-center space-x-3 ${submitted && (optionKey === question.answer ? 'text-green-500' : (selectedOptions[question.number] === optionKey ? 'text-red-500' : ''))}`}> 
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
                                                    disabled={submitted}
                                                />
                                                <span className="text-base">{optionText}</span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    {!submitted ? (
                        <button type="submit" className="fixed bottom-4 right-4 bg-indigo-500 hover:bg-transparent hover:border-black hover:text-black text-white text-base font-medium py-3 px-6 rounded-lg border">
                            Submit Quiz
                        </button>
                    ) : (
                        <button type="button" onClick={handleNewQuiz} className="fixed bottom-4 right-4 bg-indigo-500 hover:bg-transparent hover:border-black hover:text-black text-white text-base font-medium py-3 px-6 rounded-lg border">
                            New Quiz
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
    
}

export default TestPage;