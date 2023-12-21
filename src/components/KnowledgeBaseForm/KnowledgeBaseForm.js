import React from 'react';

const KnowledgeBaseForm = () => {
    return (
        <div>
            <div>
                Input your link here:
            </div>
            <input type='url' 
                placeholder='Enter a URL'
                className='input w-10px'/>
        </div>
    );
}

export default KnowledgeBaseForm;