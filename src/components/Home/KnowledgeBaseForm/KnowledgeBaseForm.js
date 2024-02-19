import React, { useState } from 'react';
import formIcon from '../../images/form.png';
import { useNavigate } from 'react-router-dom';
import { useLazyGetArticlesQuery } from '../../../services/article.js';
import { extractTextFromPDF } from './pdfUtils';

const KnowledgeBaseForm = () => {
  const [input, setInput] = useState('');
  const [inputType, setInputType] = useState('url');
  const [article, setArticle] = useState({
    url: '',
    article:''
  });
  const [getArticle, { error, isFetching }] = useLazyGetArticlesQuery();
  const [knowledgeBase, setKnowledgeBase] = useState('');
  const navigate = useNavigate();



  const handleURLSubmit = async (e) => {
    e.preventDefault(); 
  
    const { data } = (await getArticle({articleUrl: input})).data;
    const content = data.content
    console.log(content);
  
    if (data?.content) {
    const parser = new DOMParser();
    const dom = parser.parseFromString(content, 'text/html');
    const articleWithoutHtmlTags = dom.body.textContent || "";
    const newArticle= { ...article, article: articleWithoutHtmlTags };
    setArticle(newArticle);
    console.log(newArticle);
    setKnowledgeBase(articleWithoutHtmlTags);
    }
    else {
      console.error('Error fetching article:', error);
    }
  }

  const handlePDFSubmit = async (e) => {
    e.preventDefault();
    // Handle PDF input here
  };

  const handleTextSubmit = async (e) => {
    e.preventDefault();

    const plainText = String(input)

    console.log(plainText);
    setKnowledgeBase(input);
  };

  const handleFileSubmit = async (e) => {
    e.preventDefault();
    // Handle PDF input here
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputType === 'url') {
      handleURLSubmit(e);
    } else if (inputType === 'text') {
      handleTextSubmit(e);
    } else if (inputType === 'file') {
      handleFileSubmit(e);
    }
    // navigate('parameters');
  };

  return (
    <div className='flex mt-20 justify-center mb-20'>
      <div className='flex flex-col gap-2 ml-5 mr-5 w-1/2'>
        <div className='flex justify-around mb-4'>
          <button onClick={() => setInputType('url')}>URL</button>
          <button onClick={() => setInputType('text')}>Plain Text</button>
          <button onClick={() => setInputType('file')}>Local Document</button>
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
          {inputType === 'file' && (
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