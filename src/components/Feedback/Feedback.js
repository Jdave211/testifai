import React from "react";

function Feedback ({ userResponses, correctAnswerData, questionNumbers, questions }) {
    const wrongAnswers = {};
    const responseDetails = [];

    console.log(questionNumbers);

    // questionNumbers.forEach((questionNumber) => {
    //     const correctAnswer = correctAnswerData[questionNumber];
    //     const question = questions[questionNumber - 1].question;
    //     if (userResponses[questionNumber] !== correctAnswer.answer) {
    //         responseDetails.push({
    //             questionNumber: questionNumber,
    //             question: question,
    //             userResponse: userResponses[questionNumber],
    //             correctAnswer: correctAnswer.answer,
    //         });
    //     }
    // });

    return (
        <div>
            {responseDetails.map((detail, index) => (
                <div key={index}>
                    <p>Question Number: {detail.questionNumber}</p>
                    <p>Question: {detail.question}</p>
                    <p>Your Answer: {detail.userResponse}</p>
                    <p>Correct Answer: {detail.correctAnswer}</p>
                </div>
            ))}
        </div>
    );
};

export default Feedback;