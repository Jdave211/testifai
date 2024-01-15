import React, { useEffect, useState } from 'react';

function QuestionMarking({ userResponses, correctAnswers, selectedOptions }) {
    const correctAnswerData = correctAnswers.test.answers;
    const questionNumbers = Object.keys(correctAnswerData);
    const [response, setResponse] = useState(null);
    const [score, setScore] = useState(0);

    const fetchData = async () => {
        try {
            const serverResponse = await fetch('http://localhost:8080/check-user-answers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userResponses: userResponses,
                    correctAnswers: correctAnswerData,
                    selectedOptions: selectedOptions,
                }),
            });
            const data = await serverResponse.json();
            setResponse(JSON.stringify(data, null, 2));
            console.log(data);
            window.localStorage.setItem('apiResponse', JSON.stringify(data));
        } catch (error) {
            console.error('Error fetching data from server:', error);
        }
    };

    useEffect(() => {
        if (selectedOptions.quizType === 'short answer' || selectedOptions.quizType === 'essay') {
            fetchData();
        }
    }, [userResponses, correctAnswerData, selectedOptions]);

    useEffect(() => {
        questionNumbers.forEach((questionNumber) => {
            const correctAnswer = correctAnswerData[questionNumber];
            if ((selectedOptions.quizType === 'multiple choice' || selectedOptions.quizType == 'true/false') && userResponses[questionNumber] === correctAnswer) {
                setScore(prevScore => prevScore + 1);
            }
        });
        console.log(score);
    }, [userResponses, correctAnswerData, selectedOptions]);

    const percentage = () => {
        if (score === 0) {
            return 0;
        } else {
            return (score / questionNumbers.length) * 100;
        }
    }

    return (
        <div>
            Your score is: {percentage() + '%'}
        </div>
    );
};

export default QuestionMarking;