import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLazyGetArticlesQuery } from '../../../services/article.js';
import { extractTextFromPDF } from './pdfUtils';
import form from '../../images/form.png';

const KnowledgeBaseForm = () => {
  const [input, setInput] = useState('');
  const [inputType, setInputType] = useState('url');
  const [getArticle, { error }] = useLazyGetArticlesQuery();
  const [knowledgeBase, setKnowledgeBase] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && knowledgeBase) {
      console.log(knowledgeBase);
      navigate('parameters');
      window.localStorage.setItem('knowledgeBase', JSON.stringify(knowledgeBase));
    }
  }, [isLoading, knowledgeBase, navigate]);

  const handlePDFExtract = async (file) => {
    setIsLoading(true);
    try {
      const extractedText = await extractTextFromPDF(file);
      const cleanText = extractedText.replace(/(\r\n|\n|\r)/gm, " ");
      setKnowledgeBase(cleanText);
    } catch (error) {
      console.error('Error extracting text from PDF:', error);
    }
    setIsLoading(false);
  };

  const handleURLSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Assuming PDF handling is correct, we focus on the else part for non-PDF URLs
    if (!input.toLowerCase().endsWith('.pdf')) {
        try {
            const { data } = await getArticle({ articleUrl: input }).unwrap();
            
            // Assuming 'data' directly contains the content. Adjust based on the actual response structure.
            if (data?.content) {
                const content = data.content;
                const parser = new DOMParser();
                const dom = parser.parseFromString(content, 'text/html');
                const articleWithoutHtmlTags = dom.body.textContent || "";
                setKnowledgeBase(articleWithoutHtmlTags);
            } else {
                // If no content could be found, it's a good idea to reset or give feedback.
                console.error('No content found in the article response');
                setKnowledgeBase(''); // Reset or handle as needed
            }
        } catch (error) {
            console.error('Error fetching article:', error);
            // Handle any specific error UI feedback if necessary here
        } finally {
            setIsLoading(false); // Ensure loading state is always reset here
        }
      } else {
        try {
        const response = await fetch(input);
        const blob = await response.blob();
        const file = new File([blob], 'pdf_from_url.pdf');
        await handlePDFExtract(file);
      } catch (error) {
        console.error('Error fetching PDF from URL:', error);
        setIsLoading(false);
      }
    } 
    };

  const handleTextSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const plainText = String(input);
    setKnowledgeBase(plainText);

    setIsLoading(false);
  };

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    if (file.type === 'application/pdf') {
      await handlePDFExtract(file);
    } else if (file.type.includes('wordprocessingml') || file.type.includes('msword')) {
      // Handle Word document input here
      console.error('Word document processing not implemented.');
      setIsLoading(false);
    } else {
      console.error('File is not a PDF or Word document:', file);
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputType === 'url') {
      await handleURLSubmit(e); // Here we await for the function to complete processing
    } else if (inputType === 'text') {
      await handleTextSubmit(e); // Same for handleTextSubmit
    }
    // Notice we removed the navigation logic here to rely on useEffect for redirection
  };

  return (
    <div className='flex mt-20 justify-center mb-20'>
      <div className='flex flex-col gap-2 ml-5 mr-5 w-1/2'>
      <div className='flex justify-center gap-2 mb-4'>
      <button 
        onClick={() => setInputType('url')} 
        className={`px-4 py-2 rounded-md border transition-all duration-300 ${inputType === 'url' ? 'border-blue-700 text-blue-700 hover:bg-blue-100' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
      >
        URL
      </button>
      <button 
        onClick={() => setInputType('text')} 
        className={`px-4 py-2 rounded-md border transition-all duration-300 ${inputType === 'text' ? 'border-blue-700 text-blue-700 hover:bg-blue-100' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
      >
        Plain Text
      </button>
      <button 
        onClick={() => setInputType('file')} 
        className={`px-4 py-2 rounded-md border transition-all duration-300 ${inputType === 'file' ? 'border-blue-700 text-blue-700 hover:bg-blue-100' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
      >
        PDF
      </button>
    </div>
        <form className='relative flex flex-col items-center' onSubmit={handleSubmit}>
          {inputType === 'url' && (
            <div className='relative flex items-center'>
              <img src={form} className='absolute left-3 w-6 h-6 z-10'></img>
            <input
              type='url'
              placeholder='Enter a URL'
              required
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className='input pl-10 w-full h-11'
            />
            </div>
          )}
          {inputType === 'text' && (
            <div className='relative flex items-center'>
            <img src={form} className='absolute left-3 w-6 h-6 z-10'></img>
            <textarea
              placeholder='Paste plain text'
              required
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className='input pl-10 w-full h-11'
            />
            </div>
          )}
          {inputType === 'file' && (
            <input
              type='file'
              accept='application/pdf, application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
              onChange={handleFileSelect}
              className='input pl-10 w-full h-11'
            />
          )}
          <button type='submit' className='submit_btn black_btn peer-focus:border-gray-700 peer-focus:text-gray-700'>
            ⏎
          </button>
        </form>
        
        {isLoading ? (
          <p className="mt-7 font-bold text-center">Loading...</p>
        ) : (
          <p className='mt-7 font-bold text-center'>
            Enter your class notes, video lecture, document, or keyword so we can work our magic.
          </p>
        )}
      </div>
    </div>
  );
};

export default KnowledgeBaseForm;