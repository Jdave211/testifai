import React, {useState} from 'react';
import DropDownList from './DropDownList';
import Navbar from '../Home/Navbar/Navbar';


const ParametersDrop = () => {
    const [selectedOptions, setSelectedOptions] = useState('');

    const handleSelect = (name, value) => {
        setSelectedOptions(prevOptions => ({
            ...prevOptions,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(selectedOptions);
    }

    const options = [
        { value: 'Easy', label: 'Easy' },
        { value: 'Medium', label: 'Medium' },
        { value: 'Hard', label: 'Hard' }
      ];
      
      const options2 = [
        { value: 'Multiple Choice', label: 'McQ' },
        { value: 'Short Answer', label: 'Short Answer' },
        { value: 'True/False', label: 'T/F' },
        { value: 'Essay', label: 'Essay' },
        { value: 'Random', label: 'Random' }
      ];
      
      const options3 = [
        { value: '5', label: '5 questions' },
        { value: '10', label: '10 questions' },
        { value: '15', label: '15 questions' },
        { value: '20', label: '20 questions' },
        { value: '25', label: '25 questions' },
        { value: '30', label: '30 questions' }
      ];

    return (
        <div>
            <Navbar />
            <div>
                <DropDownList name='difficultyLevel' label="Select your test difficulty" options={options} onSelect={handleSelect} />  
                <DropDownList name='quizType' label="Select your type of test" options={options2} onSelect={handleSelect} />  
                <DropDownList name='numberofquestions' label="Select your number of questions" options={options3} onSelect={handleSelect} />  
            </div>
            <div className='mt-3'>
                <button 
                    type='button'
                    onClick={handleSubmit}
                    className='black_btn mx-auto flex text-lg'>
                    Generate Test
                </button>
            </div>
        </div>
        
    );
}

export default ParametersDrop;