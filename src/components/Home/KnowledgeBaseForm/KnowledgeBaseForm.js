import React from 'react';
import formIcon from '../../images/form.png'
import { Link } from 'react-router-dom';

const KnowledgeBaseForm = () => {
    return (
        <div className='flex mt-10 justify-center'>
            <div className='flex flex-col gap-2 ml-5 mr-5 w-1/2'>
                <form className='relative flex justify-center items-center'>
                    <img src={formIcon} 
                    alt='link_icon' 
                    className='absolute left-0 my-2 ml-3 w-5'/>
                    <input type='url' 
                    placeholder='Enter a URL'
                    className='url_input pe' />
                    <Link to='/parameters'>
                        <button type ='submit' 
                        className='submit_btn black_btn peer-focus:border-gray-700 peer-focus:text-gray-700'>
                            ⏎
                        </button>
                    </Link>
                </form>
                <div>
                    <p className='mt-3 font-bold text-center'>Enter the link to your class notes, video lecture or document so we can work our magic. </p>
                </div>
            </div>
        </div>
    );
}

export default KnowledgeBaseForm;