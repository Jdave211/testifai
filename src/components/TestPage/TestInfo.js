import React, {useState, useEffect} from 'react';
import Navbar from '../Home/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';


const TestInfo = (props) => {
    const [instructions, setInstructions] = useState('');
    const selectedOptions = JSON.parse(window.localStorage.getItem('selectedOptions'));
    const navigate = useNavigate();
    // const subject = apiResponse.questions.test.subject;

    const generateInstructions = () => {
    let generatedInstructions = '';

    if (selectedOptions.quizType === 'multiple choice') {
        generatedInstructions += "In this section, you'll encounter multiple-choice questions. Each question has 4 options, and you need to select the correct answer by ticking the appropriate checkboxes.\n\n";
    }

    if (selectedOptions.quizType === 'essay') {
        generatedInstructions += "For essay questions, you'll be required to express your thoughts and ideas in a written format. Make sure to adhere to the specified word limit.\n\n";
    }

    if (selectedOptions.quizType === 'short answer') {
        generatedInstructions += "Short answer questions require concise responses. Use the provided textbox to answer the questions succinctly.\n\n";
    }

    if (selectedOptions.quizType === 'true/false') {
        generatedInstructions += "For these true/false questions, you'll be presented with a statement. Your task is to determine whether the statement is true or false.\n\n";
    }

    generatedInstructions += "Take your time, carefully consider each question, and provide thoughtful responses. Good luck!";

    setInstructions(generatedInstructions);
    };

    useEffect(() => {
        generateInstructions();
    }, []);

    const handleButtonClick = () => {
        navigate('/testpg')
    }   

    return (
        <div>
            <div className=''>
                <Navbar />
                <div className='flex mt-10 pt-15'>
                    <p className='text-5xl font-bold mx-auto text-yellow-600 stud'>Test</p>
                </div>
                <div className='flex justify-center font-bold mb-2 mt-2 text-4xl underline stud'>
                    Instructions
                </div>
                <div className = 'mt-5'>
                <p className='flex justify-center underline text-xl mb-5'>
                    Welcome to your test!
                </p>
                <div className='ml-3 mr-3 text-center text-lg'>{instructions}</div>
                </div>
                <div className='flex justify-center mt-14'>
                    <button 
                    className='black_btn'
                    onClick={handleButtonClick}>
                        Let's Have It!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestInfo;
    