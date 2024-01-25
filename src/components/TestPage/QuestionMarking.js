import React, { useEffect, useState } from 'react';

function QuestionMarking({ userResponses, correctAnswers, quizType, questions }) {
    const apiResponse = JSON.parse(window.localStorage.getItem('apiResponse'));
    const correctAnswerData = correctAnswers.test.answers;
    const questionNumbers = Object.keys(correctAnswerData);
    const [response, setResponse] = useState(null);
    const [score, setScore] = useState(0);
    const [wrongQuestionNumbers, setWrongQuestionNumbers] = useState([]);

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
                    quizType: quizType,
                    generatedQuestions: apiResponse.questions,
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
        if (quizType === 'short answer' || quizType === 'essay') {
            fetchData();
        }
    }, [userResponses, correctAnswerData, quizType]);

    useEffect(() => {
        let newScore = 0;
        let newWrongQuestionNumbers = [];
        questionNumbers.forEach((questionNumber) => {
            const correctAnswer = correctAnswerData[questionNumber];
            if ((quizType === 'multiple choice' || quizType == 'true/false') && userResponses[questionNumber] === correctAnswer.answer) {
                newScore += 1;
            }
            else if (userResponses[questionNumber] !== correctAnswer.answer) {
                newWrongQuestionNumbers.push(questionNumber);
            }
        });
        setScore(newScore);
        setWrongQuestionNumbers(newWrongQuestionNumbers);
        console.log(score)
        console.log(wrongQuestionNumbers)
    }, [userResponses, correctAnswerData, quizType]);

    const percentage = () => {
        if (score === 0) {
            return 0;
        } else {
            return ((score / questionNumbers.length) * 100).toFixed(0);
        }
    }

    return (
        <div>
            Your score is: {percentage() + '%'}
        </div>
    );
};

export default QuestionMarking;