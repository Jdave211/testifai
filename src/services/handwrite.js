import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiKey = process.env.REACT_APP_RAPID_API_KEY;

export const handwritingApi = createApi({
  reducerPath: 'handwritingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pen-to-print-handwriting-ocr.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', rapidApiKey);
      headers.set('X-RapidAPI-Host', 'pen-to-print-handwriting-ocr.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    recognizeHandwriting: builder.mutation({
      query: ({ srcImg, session }) => {
        const formData = new FormData();
        formData.append('srcImg', srcImg);

        return {
          url: '/recognize/',
          method: 'POST',
          body: formData,
        };
      },
    }),
  }),
});

export const { useRecognizeHandwritingMutation } = handwritingApi;