import React, { useState } from 'react';
import formIcon from '../../images/form.png';
import { Link } from 'react-router-dom';

const KnowledgeBaseForm = () => {
  const MAX_URLS = 3; // Maximum number of URLs

  const [urls, setUrls] = useState(['']);

  const addUrlInput = () => {
    if (urls.length < MAX_URLS) {
      setUrls([...urls, '']);
    }
  };

  const handleUrlChange = (index, value) => {
    const newUrls = [...urls];
    newUrls[index] = value;
    setUrls(newUrls);
  };

  const removeUrlInput = (index) => {
    if (urls.length > 1) {
      const newUrls = [...urls];
      newUrls.splice(index, 1);
      setUrls(newUrls);
    }
  };

  const handleSubmit = () => {
    // Handle the submission with the array of URLs (urls)
  };

  return (
    <div className='flex mt-10 justify-center'>
      <div className='flex flex-col gap-2 ml-5 mr-5 w-1/2'>
        <form className='relative flex flex-col items-center'>
          {urls.map((url, index) => (
            <div key={index} className='relative flex items-center w-full'>
              <button type='button' onClick={() => removeUrlInput(index)}>
                -
              </button>
              <img src={formIcon} alt='link_icon' className='absolute left-0 my-2 ml-3 w-5' />
              <input
                type='url'
                placeholder='Enter a URL'
                value={url}
                onChange={(e) => handleUrlChange(index, e.target.value)}
                className='url_input pl-10 w-full'
              />
            </div>
          ))}
          {urls.length < MAX_URLS && (
            <button type='button' onClick={addUrlInput}>
              +
            </button>
          )}
          <Link to='/parameters'>
            <button
              type='button' // Change to 'submit' if you want to trigger form submission
              onClick={handleSubmit}
              className='submit_btn black_btn peer-focus:border-gray-700 peer-focus:text-gray-700'
            >
              ⏎
            </button>
          </Link>
        </form>
        <div>
          <p className='mt-3 font-bold text-center'>
            Enter the links to your class notes, video lectures, or documents (up to {MAX_URLS} URLs) so we can work our magic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBaseForm;
