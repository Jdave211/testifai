import React from 'react';

function QuestionMarking({ userResponses, correctAnswers, selectedOptions }) {
    // Access the correct answers
    const correctAnswerData = correctAnswers.test.answers;

    // Get the question numbers
    const questionNumbers = Object.keys(correctAnswerData);

    const grade = () => {
        if (!userResponses || !correctAnswers) {
            return 0;
        }
    
        let score = 0;
    
        for (let i = 0; i < questionNumbers.length; i++) {
            const questionNumber = questionNumbers[i];
            const correctAnswer = correctAnswerData[questionNumber];
    
            console.log(questionNumber);
    
            if (selectedOptions.quizType === 'multiple choice' && userResponses[questionNumber] === correctAnswer) {
                score++;
            } else if (selectedOptions.quizType === 'true/false' && userResponses[questionNumber] === correctAnswer) {
                score++;
            } else if (selectedOptions.quizType === 'short answer') {
                score++;
            } else if (selectedOptions.quizType === 'essay' && userResponses[questionNumber] === correctAnswer) {
                score++;
            }
        }
    
        console.log(score);
        return score;
    };

    const percentage = () => {
        if (grade() === 0) {
            return 0;
        } else {
            return (grade() / questionNumbers.length) * 100;
        }
    }
    

    return (
        <div>
            Your score is: {percentage() + '%'}
        </div>
    );
}

export default QuestionMarking;