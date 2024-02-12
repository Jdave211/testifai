import React, { useState } from 'react';
import formIcon from '../../images/form.png';
import { useNavigate } from 'react-router-dom';
import { useLazyGetArticlesQuery } from '../../../services/article.js';
import { extractTextFromPDF } from './pdfUtils';

const KnowledgeBaseForm = () => {
  const [url, setUrl] = useState('');
  const [article, setArticle] = useState({});
  const [knowledgeBase, setKnowledgeBase] = useState('');
  const [urlType, setUrlType] = useState('');
  const [text, setText] = useState('');
  const [getArticle, { error }] = useLazyGetArticlesQuery();
  const navigate = useNavigate();

  async function checkURLType(url) {
    if (url.toLowerCase().endsWith('.pdf')) {
        setUrlType('pdf');
    }
    
    try {
        const response = await fetch(url, { method: 'HEAD' });
        const contentType = response.headers.get('Content-Type');
        if (contentType && contentType.toLowerCase().startsWith('application/pdf')) {
            setUrlType('pdf');
        }
        
        const htmlResponse = await fetch(url);
        const htmlText = await htmlResponse.text();
        if (htmlText.toLowerCase().includes('.pdf')) {
            setUrlType('pdf');
        }
    } catch (error) {
        console.error('Error checking URL type:', error);
    }
    
    // If none of the checks indicate a PDF, assume it's a regular article
    setUrlType('article');
}

const handleFileSelect = async (file) => {
  const extractedText = await extractTextFromPDF(file);
  setText(extractedText);
};

const handlePDFSubmit = async () => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const file = new File([blob], 'pdf_from_url.pdf');
    handleFileSelect(file);
  } catch (error) {
    console.error('Error fetching PDF from URL:', error);
  }
};

const handleArticleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await getArticle({ articleUrl: encodeURIComponent(url) });
  
    if (data?.data?.content) {
      const articleContent = data.data.content;
  
      function removeHtmlTags(htmlString) {
        var doc = new DOMParser().parseFromString(htmlString, 'text/html');
        return doc.body.textContent || "";
      }
  
      const newArticle = { ...article, article: removeHtmlTags(JSON.stringify({ articleContent }, null, 2)) };
      setArticle(newArticle);
      const message = JSON.stringify(newArticle, null, 2);
      setKnowledgeBase(message);
      console.log(message);
      window.localStorage.setItem('userMessage', message);
}
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    checkURLType(url);
  
    if (urlType === 'pdf') {
      handlePDFSubmit(e);
    } else if (urlType === 'article') {
      handleArticleSubmit(e);
    }
      navigate('parameters');
    };


  

  return (
    <div className='flex mt-20 justify-center mb-20'>
      <div className='flex flex-col gap-2 ml-5 mr-5 w-1/2'>
        <form className='relative flex flex-col items-center'>
          <div className='relative flex items-center w-full'>
            <img src={formIcon} alt='link_icon' className='absolute left-0 my-2 ml-3 w-5' />
            <input
              id={`url-input-0`}
              name={`url-input-0`}
              type='url'
              placeholder='Enter a URL'
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className='url_input pl-10 w-full'
            />
          </div>
            <button
              type='submit'
              onClick={handleSubmit}
              className='submit_btn black_btn peer-focus:border-gray-700 peer-focus:text-gray-700'
            >
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
