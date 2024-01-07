import React, {useState, useEffect} from 'react';
import DropDownList from './DropDownList';
import Navbar from '../Home/Navbar/Navbar';
import loader from '../images/loader.gif';


const ParametersDrop = () => {
    const [selectedOptions, setSelectedOptions] = useState('');
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const userMessage = window.localStorage.getItem('userMessage');


    const handleSelect = (name, value) => {
        setSelectedOptions(prevOptions => ({
            ...prevOptions,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log(userMessage);
        setIsLoading(true);
        setTimeout(async () => {
            try {
                const serverResponse = await fetch(`http://localhost:8080?options=${encodeURIComponent(JSON.stringify({...selectedOptions, userMessage: userMessage}))}`);
                const data = await serverResponse.json();
                setResponse(JSON.stringify(data, null, 2));
                console.log(selectedOptions);
            } catch (error) {
                console.error('Error fetching data from server:', error);
            } finally {
                setIsLoading(false);
            }
        }, 3000);
    }

    useEffect(() => {
        console.log(response);
        window.localStorage.setItem('apiResponse', response);
    }, [response]);

    const options = [
        { value: 'easy', label: 'Easy' },
        { value: 'medium', label: 'Medium' },
        { value: 'hard', label: 'Hard' }
      ];
      
      const options2 = [
        { value: 'multiple choice', label: 'McQ' },
        { value: 'short answer', label: 'Short Answer' },
        { value: 'True/False', label: 'T/F' },
        { value: 'essay', label: 'Essay' }
      ];
      
      const options3 = [
        { value: 5, label: '5 questions' },
        { value: 10, label: '10 questions' },
        { value: 15, label: '15 questions' },
        { value: 20, label: '20 questions' },
        { value: 25, label: '25 questions' },
        { value: 30, label: '30 questions' }
      ];

      return (
        <div>
            <Navbar />
            <div>
                {isLoading ?
                    <div className='my-10 max-w-full flex justify-center items-center'> 
                        <img src={loader} alt='loader' className='w-30 h-30 object-contain' />
                    </div> :
                    (
                        <div>
                            <DropDownList name='difficultyLevel' label="Select your test difficulty" options={options} onSelect={handleSelect} />  
                            <DropDownList name='quizType' label="Select your type of test" options={options2} onSelect={handleSelect} />  
                            <DropDownList name='numberOfQuestions' label="Select your number of questions" options={options3} onSelect={handleSelect} />  
                            <div className='mt-3 flex justify-center items-center'>
                                <button 
                                    type='button'
                                    onClick={handleSubmit}
                                    className='black_btn mx-auto flex text-lg'>
                                    Generate Test
                                </button>
                            </div>
                            <div className='my-10 max-w-full flex justify-center items-center'>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default ParametersDrop;