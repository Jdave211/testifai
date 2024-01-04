import OpenAI from 'openai';

const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY;

const openai = new OpenAI({key:openaiApiKey});

