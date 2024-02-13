import React, { useState } from 'react';
import formIcon from '../../images/form.png';
import { useNavigate } from 'react-router-dom';
import { useLazyGetArticlesQuery } from '../../../services/article.js';
import { extractTextFromPDF } from './pdfUtils';

const KnowledgeBaseForm = () => {
  const [input, setInput] = useState('');
  const [inputType, setInputType] = useState('url');
  const [article, setArticle] = useState({});
  const [knowledgeBase, setKnowledgeBase] = useState('');
  const [getArticle, { error }] = useLazyGetArticlesQuery();
  const navigate = useNavigate();

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    if (file.type === 'application/pdf') {
      let extractedText = await extractTextFromPDF(file);
      setInput(extractedText);
      console.log(extractedText);
    } else {
      console.error('File is not a PDF:', file);
    }
  };

  const handleURLSubmit = async () => {
    // Handle URL input here
  };

  const handleTextSubmit = async () => {
    // Handle plain text input here
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputType === 'url') {
      handleURLSubmit();
    } else if (inputType === 'text') {
      handleTextSubmit();
    } else if (inputType === 'pdf') {
      // Handle PDF input here
    }
    navigate('parameters');
  };

  return (
    <div className='flex mt-20 justify-center mb-20'>
      <div className='flex flex-col gap-2 ml-5 mr-5 w-1/2'>
        <div className='flex justify-around mb-4'>
          <button onClick={() => setInputType('url')}>URL</button>
          <button onClick={() => setInputType('text')}>Plain Text</button>
          <button onClick={() => setInputType('pdf')}>Local PDF</button>
        </div>
        <form className='relative flex flex-col items-center' onSubmit={handleSubmit}>
          {inputType === 'url' && (
            <input
              type='url'
              placeholder='Enter a URL'
              required
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className='input pl-10 w-full'
            />
          )}
          {inputType === 'text' && (
            <textarea
              placeholder='Paste plain text'
              required
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className='input pl-10 w-full'
            />
          )}
          {inputType === 'pdf' && (
            <input
              type='file'
              accept='application/pdf'
              onChange={handleFileSelect}
              className='input pl-10 w-full'
            />
          )}
          <button type='submit' className='submit_btn black_btn peer-focus:border-gray-700 peer-focus:text-gray-700'>
            ⏎
          </button>
        </form>
        <div>
          <p className='mt-7 font-bold text-center'>
            Enter the link to your class notes, video lecture, or document so we can work our magic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBaseForm;