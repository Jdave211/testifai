import React from 'react';
import ParticlesBg from 'particles-bg';
import './Info.css';
import { motion } from 'framer-motion';

const Info = () => {
  return (
    <div className='flex'>
      <div className='mx-auto mt-7 relative w-100'>
        <div className='inf'>
          <p className='name mx-auto relative'>TestifAI</p>
          <div className='flex justify-between mb-2'>
            <p className='text-5xl font-bold mx-auto text-yellow-600 stud'>By Students, For Students</p>
          </div>
          <div className='flex justify-between'>
            <p className='column_text mr-5 font-bold text-yellow-600 mb-10'>
              Your ultimate companion for interactive and personalized learning. As a cutting-edge quiz app, Testifai goes beyond traditional methods, offering a dynamic platform that generates detailed tests and quizzes based on your chosen knowledge base. Whether you're studying from lecture notes, videos, or textbooks, Testifai adapts to your content, providing a tailored quiz experience that reinforces your understanding.
            </p>
            <p className='column_text ml-5 font-bold'>
              Easily generate tests to practice and better understand stuff. Enter the URL of your class notes, video lecture, or document. Testifai will use this information to generate tailored quizzes for you. Select the difficulty level, test type (Multiple Choice, Short Answer, True/False, Essay, or Random), and the number of questions for your quiz. Click the "Generate Test" button to receive a detailed quiz based on your selected parameters.
            </p>
          </div>
        </div>
      </div>
      <ParticlesBg color='#DDA0DD' num={35} className='particles' type="cobweb" bg={true} />
    </div>
  );
}

export default Info;
