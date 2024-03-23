import React, {useState, useEffect} from 'react';
import Navbar from '../Home/Navbar/Navbar';
import QuestionMarking from './QuestionMarking';
import { useNavigate } from 'react-router-dom';

const TestPage = () => {
    const apiResponse = JSON.parse(window.localStorage.getItem('apiResponse'));
    console.log(apiResponse);
    const questions = findArrayInObject(apiResponse.formattedQuestions);
    console.log(questions);
    const selectedParams = JSON.parse(window.localStorage.getItem('selectedOptions'));
    console.log(selectedParams);
    const quizType = selectedParams.quizType;
    const [userResponses, setUserResponses] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isMarkingDone, setIsMarkingDone] = useState(false);
    const navigate = useNavigate();


    const handleAnswerSelection = (questionIndex, selectedOption) => {
        let userResponse;
    
        if (quizType === 'true/false') {
            // Map 'true' or 'false' directly
            userResponse = selectedOption === 'True' ? 'True' : 'False';
        } else {
            // For short answer and essay questions, store the answer directly
            userResponse = selectedOption;
        }
    
        setSelectedAnswers(prevState => ({
            ...prevState,
            [questionIndex + 1]: userResponse,
        }));
    };

    const handleSubmitTest = () => {
        const userResponses = {};
    
        questions.forEach((question, index) => {
            const questionIndex = index + 1; // 1-based index
    
            if (quizType === 'multiple choice' && selectedAnswers[questionIndex] !== undefined) {
                const alphabetOption = String.fromCharCode('a'.charCodeAt(0) + selectedAnswers[questionIndex]);
                userResponses[questionIndex] = alphabetOption;
            } else if (quizType === 'true/false' && selectedAnswers[questionIndex] !== undefined) {
                userResponses[questionIndex] = selectedAnswers[questionIndex];
            } else if (quizType === 'short answer' && selectedAnswers[questionIndex] !== undefined) {
                userResponses[questionIndex] = selectedAnswers[questionIndex];
            } else if (quizType === 'essay' && selectedAnswers[questionIndex] !== undefined) {
                userResponses[questionIndex] = selectedAnswers[questionIndex];
            }
        });
    
        console.log(userResponses);
        console.log(correctAnswers);
        console.log(apiResponse)
        
        setUserResponses(userResponses);
        setIsSubmitted(true);
    };

    useEffect(() => {
        if (isSubmitted && isMarkingDone) {
            navigate('/resultpg');
        }
    }, [isSubmitted, isMarkingDone]);
    

    return (
        <div>
            <Navbar />
            <div className='mt-10'>
                Tests
            </div>
            <div className='questions mt-7 ml-4'>
                {questions && questions.map((question, index) => (
                <div key={index} className ='mb-7 mt-12'>
                    <p className='text-lg font-semibold'>{index + 1}. {question.question}</p>
                    {quizType === 'multiple choice' && question.options && typeof question.options === 'object' && Object.entries(question.options).map(([key, value], i) => (
                    <div key={i} className='flex items-center'>
                        <input 
                            type='radio' 
                            id={`option${i}`} 
                            name={`question${index}`} 
                            value={value} 
                            onChange={() => handleAnswerSelection(index, i)} // Pass the index instead of the value
                        />
                        <label htmlFor={`option${i}`} className='ml-2 mb-1'>{String.fromCharCode('A'.charCodeAt(0) + i)}: {value}</label>
                    </div>
                ))}
                    {quizType === 'essay' && 
                        <textarea 
                            className='w-1/2 mt-4 rounded'
                            onChange={(e) => handleAnswerSelection(index, e.target.value)}
                        />
                    }
                    {quizType === 'short answer' && 
                        <input 
                            type='text' 
                            className='w-1/3 mt-4 rounded'
                            onChange={(e) => handleAnswerSelection(index, e.target.value)}
                        />
                    }
                    {quizType === 'true/false' && question.options && typeof question.options === 'object' && Object.entries(question.options).map(([key, value], i) => (
                        <div 
                            key={i} 
                            className='flex items-center'
                            name={`question${index}`} >
                            <input type='radio' id={`option${i}`} name={`question${index}`} value={value} onChange={() => handleAnswerSelection(index, i === 0 ? 'True' : 'False')} />
                            <label htmlFor={`option${i}`} className='ml-2 mb-1'>{value}</label>
                        </div>
                    ))}
                    {index !== questions.length - 1 && <hr className='border-t border-gray-200 my-4' />}
                </div>
            ))}
            {isSubmitted && <QuestionMarking 
                                userResponses={userResponses} 
                                correctAnswers={correctAnswers} 
                                quizType={quizType}
                                questions={questions}
                                onMarkingDone={() => setIsMarkingDone(true)}
                            />}
            </div>
            <div className='text-right'>
                <button type='button' className='black_btn mt-16 mb-7 mr-3' onClick={handleSubmitTest}>Submit Test</button>
            </div>
        </div>
    );
}

export default TestPage;
