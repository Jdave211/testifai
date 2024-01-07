import React from 'react';

const TestInfo = () => {
    return (
        <div>
            <div>
            Welcome to the Test
            Please read the following instructions carefully before proceeding:

            {selectedOptions.mcq && "**Test Type: Multiple Choice**\n\nIn this section, you'll encounter multiple-choice questions. Each question has multiple options, and you need to select the correct answer by ticking the appropriate checkboxes.\n"}

            {selectedOptions.essay && "**Test Type: Essay**\n\nFor essay questions, you'll be required to express your thoughts and ideas in a written format. Use the provided textbox to compose your essay. Make sure to adhere to the specified word limit.\n"}

            {selectedOptions.shortAnswer && "**Test Type: Short Answer**\n\nShort answer questions require concise responses. Use the provided textbox to answer the questions succinctly.\n"}

            {selectedOptions.fillInTheBlank && "**Test Type: Fill in the Blank**\n\nIn fill-in-the-blank questions, there will be missing words or phrases in sentences. Your task is to fill in the blanks with the correct words or phrases.\n"}

            Take your time, carefully consider each question, and provide thoughtful responses. Good luck!

            </div>
            <div>
                <button className='black_btn'>
                    Let's Have It!
                </button>
            </div>
        </div>
    );
}

export default TestInfo;