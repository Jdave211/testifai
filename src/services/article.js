import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const rapidApiKey = process.env.REACT_APP_RAPID_API_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://article-extractor2.p.rapidapi.com/',
      prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', rapidApiKey);
        headers.set('X-RapidAPI-Host', 'article-extractor2.p.rapidapi.com');
        return headers;
      },
    }),
    endpoints: (builder) => ({
      getArticles: builder.query({
        query: (params) =>
          `/article/parse?url=${encodeURIComponent(params.articleUrl)}&length=3`,
      }),
    }),
  });
  
  export const { useLazyGetArticleQuery } = articleApi;
  