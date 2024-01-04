import React, {useState} from 'react';
import './DropDownList.css';


const DropDownList = ({ name, label, options, onSelect}) => {
    const [selectedValue, setSelectedValue] = useState('');
  
    const handleDropdownChange = (event) => {
        setSelectedValue(event.target.value);
        onSelect(name, event.target.value);
      };

    return (
        <div className='select_menu'>
                <select className = 'select_btn'id="dropdown" value={selectedValue} onChange={handleDropdownChange}>
                <option className= 'option' value="">{label}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                    {option.label}
                    </option>
                ))}
                </select>
        </div>
    );
}

export default DropDownList;

