import React from 'react';
import ParticlesBg from 'particles-bg';
import './Info.css';

const Info = () => {
    return (
        <div className='flex mt-5'>
            <div className='mx-auto mt-7 relative w-100'>
                <div className='inf'>
                    <p className='name mx-auto relative'>Testifai</p>
                    <div className='flex justify-between'>
                        <p className='text-5xl font-bold ml-5 text-yellow-600 '>By Students, For Students</p>
                        <p className='column_text mr-5 mt-2 font-medium text-yellow-600'>
                            Your ultimate companion for interactive and personalized learning. As a cutting-edge quiz app, Testifai goes beyond traditional methods, offering a dynamic platform that generates detailed tests and quizzes based on your chosen knowledge base. Whether you're studying from lecture notes, videos, or textbooks, Testifai adapts to your content, providing a tailored quiz experience that reinforces your understanding.
                        </p>
                    </div>
                </div>
                <div className='flex justify-center mt-7'>
                    <button className='black_btn w-45 '>Let's Have It!</button>
                </div>
            </div>
            <ParticlesBg color='#DDA0DD'num={35} className='particles' type="cobweb" bg={true} />
        </div>
    );
}

export default Info;