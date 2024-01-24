import React from "react";

function Feedback ({ userResponses, correctAnswerData, questions }) {
    const questionNumbers = Object.keys(correctAnswerData);
    const wrongAnswers = {};

    questionNumbers.forEach((questionNumber) => {
        const correctAnswer = correctAnswerData[questionNumber];
        if (userResponses[questionNumber] !== correctAnswer.answer) {
            newScore += 1;
        }
    });

    return (
        <div>
            
        </div>
    );
};

export default Feedback;