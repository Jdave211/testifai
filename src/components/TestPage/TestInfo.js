import React, {useState, useEffect} from 'react';
import Navbar from '../Home/Navbar/Navbar';


const TestInfo = () => {
    const [instructions, setInstructions] = useState('');
    const apiResponse = JSON.parse(window.localStorage.getItem('apiResponse'));
    const selectedOptions = JSON.parse(window.localStorage.getItem('selectedOptions'));
    // const subject = apiResponse.questions.test.subject;

    const generateInstructions = () => {
    let generatedInstructions = `Welcome to your Test!\n\n`;

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

    return (
        <div>
            <div>
                <Navbar />
                <h1>Test</h1>
                <div>
                <h2>Instructions:</h2>
                <div>{instructions}</div>
                </div>
                <button className='black_btn'>Let's Have It!</button>
            </div>
        </div>
    );
};

export default TestInfo;
    