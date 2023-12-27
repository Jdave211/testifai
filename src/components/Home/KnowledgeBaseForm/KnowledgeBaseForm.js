import React, { useState } from 'react';
import formIcon from '../../images/form.png';
import plusIcon from '../../images/plus.png';
import minusIcon from '../../images/minus.png';
import { Link } from 'react-router-dom';
import  {ApifyClient} from 'apify-client';

// const client = useMemo(() => {
//   return new ApifyClient({
//     token: process.env.REACT_APP_APIFY_TOKEN,
//   });
// }, []);

const KnowledgeBaseForm = () => {
  const MAX_URLS = 3;

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
    <div className='flex mt-20 justify-center mb-20'>
      <div className='flex flex-col gap-2 ml-5 mr-5 w-1/2'>
        <form className='relative flex flex-col items-center'>
          {urls.map((url, index) => (
            <div key={index} className='relative flex items-center w-full'>
              <button type='button' onClick={() => removeUrlInput(index)}>
                <img src ={minusIcon} alt='remove_icon' className='my-2 -ml-2 w-3' />
              </button>
              <img src={formIcon} alt='link_icon' className='absolute left-0 my-2 ml-3 w-5' />
              <input
                type='url'
                placeholder='Enter a URL'
                required
                value={url}
                onChange={(e) => handleUrlChange(index, e.target.value)}
                className='url_input pl-10 w-full'
              />
            </div>
          ))}
          {urls.length < MAX_URLS && (
            <button type='button' onClick={addUrlInput}>
              <img src ={plusIcon} alt='plus_icon' className='absolute left-0 my-2 -ml-4 w-5' />
            </button>
          )}
          <Link to='/parameters'>
            <button
              type='submit'
              onClick={handleSubmit}
              className='submit_btn black_btn peer-focus:border-gray-700 peer-focus:text-gray-700'
            >
              ⏎
            </button>
          </Link>
        </form>
        <div>
          <p className='mt-7 font-bold text-center'>
            Enter the links to your class notes, video lectures, or documents so we can work our magic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBaseForm;
