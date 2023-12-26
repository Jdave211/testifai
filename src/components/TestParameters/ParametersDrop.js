import React, {useState} from 'react';
import DropDownList from './DropDownList';
import Navbar from '../Home/Navbar/Navbar';

const ParametersDrop = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelect = (value) => {
        setSelectedOption(value);
    };

    const options = [
        { value: 'Easy', label: 'Easy' },
        { value: 'Medium', label: 'Medium' },
        { value: 'Hard', label: 'Hard' }
      ];
      
      const options2 = [
        { label: 'Multiple Choice', value: 'McQ' },
        { label: 'Short Answer', value: 'Short Answer' },
        { label: 'True/False', value: 'T/F' },
        { label: 'Essay', value: 'Essay' },
        { label: 'Random', value: 'Random' }
      ];
      
      const options3 = [
        { value: '5', label: '5 questions' },
        { value: '10', label: '10 questions' },
        { value: '20', label: '15 questions' },
        { value: '20', label: '20 questions' },
        { value: '25', label: '25 questions' },
        { value: '30', label: '30 questions' }
      ];

    return (
        <div>
            <Navbar />
            <div>
                <DropDownList label="Select your test difficulty" options={options} onSelect={handleSelect} />  
                <DropDownList label="Select your type of test" options={options2} onSelect={handleSelect} />  
                <DropDownList label="Select your number of questions" options={options3} onSelect={handleSelect} />  
            </div>
            <div className='mt-3'>
                <button className='black_btn mx-auto flex text-lg'>Generate Test</button>
            </div>
        </div>
        
    );
}

export default ParametersDrop;