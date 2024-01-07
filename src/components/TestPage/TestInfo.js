import React, {useState} from 'react';


const TestPage = () => {
    const [instructions, setInstructions] = useState('');
    const apiResponse = JSON.parse(window.localStorage.getItem('apiResponse'));
    const selectedOptions = JSON.parse(window.localStorage.getItem('selectedOptions'));
    const subject = apiResponse.questions.test.subject;

    
    const generateInstructions = () => {
    let generatedInstructions = `Welcome to your ${subject} Test!\n\n`;

    if (selectedOptions.quizType === 'multiple choice') {
        generatedInstructions += "**Test Type: Multiple Choice**\n\nIn this section, you'll encounter multiple-choice questions. Each question has multiple options, and you need to select the correct answer by ticking the appropriate checkboxes.\n\n";
    }

    if (selectedOptions.quizType === 'essay') {
        generatedInstructions += "**Test Type: Essay**\n\nFor essay questions, you'll be required to express your thoughts and ideas in a written format. Use the provided textbox to compose your essay. Make sure to adhere to the specified word limit.\n\n";
    }

    if (selectedOptions.quizType === 'short answer') {
        generatedInstructions += "**Test Type: Short Answer**\n\nShort answer questions require concise responses. Use the provided textbox to answer the questions succinctly.\n\n";
    }

    if (selectedOptions.quizType === 'true/false') {
        generatedInstructions += "**Test Type: Fill in the Blank**\n\nIn fill-in-the-blank questions, there will be missing words or phrases in sentences. Your task is to fill in the blanks with the correct words or phrases.\n\n";
    }

    generatedInstructions += "Take your time, carefully consider each question, and provide thoughtful responses. Good luck!";

    setInstructions(generatedInstructions);
    };

    return (
    <div>
        <h1>{subject} Test</h1>
        <div>
        <h2>Instructions:</h2>
        <pre>{instructions}</pre>
        </div>
        <button>Show Test</button>
    </div>
    );
};

export default TestPage;
    