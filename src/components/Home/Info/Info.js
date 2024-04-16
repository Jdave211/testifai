import React from 'react';
import ParticlesBg from 'particles-bg';
import './Info.css';
import { CanvasRevealEffectDemo } from './about.tsx';

const Info = () => {
  return (
    <div className='flex mt-9'>
      <div className='mx-auto mt-7 relative w-full'>
        <div className=''>
          <p className='name mx-auto relative inf'>TestifAI</p>
          <div className='flex justify-between mb-2'>
            <p className='text-5xl font-bold mx-auto stud'>By Students, For Students</p>
          </div>
          <div className='flex mt-8 mb-8 h-64'>
            <CanvasRevealEffectDemo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
