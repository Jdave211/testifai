import React from 'react';

function QuestionMarking({ userAnswers, correctAnswers }) {
    const grade = () => {
        let score = 0;
    
        for (let i = 0; i < correctAnswers.length; i++) {
            if (userAnswers[correctAnswers[i].question_number] === correctAnswers[i].answer) {
                score++;
            }
        }
    
        console.log(score);
        return score;
    };

    const percentage = () => {
        return (grade() / correctAnswers.length) * 100;
    }
    

    return (
        <div>
            Your score is: {percentage() + '%'}
        </div>
    );
}

export default QuestionMarking;