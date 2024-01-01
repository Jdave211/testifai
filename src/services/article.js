import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const rapidApiKey = process.env.REACT_APP_RAPID_API_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://article-extractor2.p.rapidapi.com/',
      prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', '8e21c8a9a9msh3f67322cceb07a1p19d1e6jsnffcca359b7e5');
        headers.set('X-RapidAPI-Host', 'article-extractor2.p.rapidapi.com');
        return headers;
      },
    }),
    endpoints: (builder) => ({
      getArticles: builder.query({
        query: (params) =>
          `/article/parse?url=${encodeURIComponent(params.articleUrl)}`,
      }),
    }),
  });
  
  export const { useLazyGetArticleQuery } = articleApi;
  