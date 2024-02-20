import React, { useState, useEffect } from 'react';
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

  const handlePDFExtract = async (file) => {
    const extractedText = await extractTextFromPDF(file);
    const cleanText = extractedText.replace(/(\r\n|\n|\r)/gm, " ");
  
    setKnowledgeBase(cleanText);

  };

  const handleURLSubmit = async (e) => {
    e.preventDefault(); 

    if (input.toLowerCase().endsWith('.pdf')) {
      try {
        const response = await fetch(input);
        const blob = await response.blob();
        const file = new File([blob], 'pdf_from_url.pdf');
        handlePDFExtract(file);
      } catch (error) {
        console.error('Error fetching PDF from URL:', error);
      }
  }
  else {
    const { data } = (await getArticle({articleUrl: input})).data;
    const content = data.content
  
    if (data?.content) {
    const parser = new DOMParser();
    const dom = parser.parseFromString(content, 'text/html');
    const articleWithoutHtmlTags = dom.body.textContent || "";
    const newArticle= { ...article, article: articleWithoutHtmlTags };
    setArticle(newArticle);
    setKnowledgeBase(articleWithoutHtmlTags);
    console.log(knowledgeBase);
    }
    else {
      console.error('Error fetching article:', error);
    }
  }
  };

  const handleTextSubmit = async (e) => {
    e.preventDefault();

    const plainText = String(input)

    setKnowledgeBase(plainText);
  };

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    if (file.type === 'application/pdf') {
      handlePDFExtract(file);
    } else if (file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      // Handle Word document input here
    } else {
      console.error('File is not a PDF or Word document:', file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputType === 'url') {
      handleURLSubmit(e);
    } else if (inputType === 'text') {
      handleTextSubmit(e);
    }
    
    navigate('parameters');
  };

  useEffect(() => {
    console.log(knowledgeBase);
    window.localStorage.setItem('knowledgeBase', JSON.stringify(knowledgeBase));
  }, [knowledgeBase]);

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
              accept='application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document'
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