import React from 'react';

const KnowledgeBaseForm = () => {
    return (
        <div className='flex mt-7'>
            <div>
                Input your link here:
            </div>
            <input type='url' 
                placeholder='Enter a URL'
                className='input'/>
        </div>
    );
}

export default KnowledgeBaseForm;