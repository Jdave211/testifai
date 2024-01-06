// import OpenAI from 'openai';

// const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY

// const openai = new OpenAI({apiKey:openaiApiKey});

// const openaiAssistant = async (userMessage, difficultyLevel, numberOfQuestions, quizType) => {
//     try {
//         const completion = await openai.chat.completions.create({
//           messages: [
//             {
//             role: 'system',
//             content: `You are a highly knowledgeable tutor, trained in every aspect of human endeavour from art to zoology. Your current task is to generate a well-structured test with a relative difficulty level of ${difficultyLevel}. This test consist of only ${numberOfQuestions} ${quizType} questions. In your questions, ensure to cover the key concepts and little details in my knowledge base:`,
//             },
//             { 
//             role: 'user', 
//             content: userMessage },
//           ],
//           model: 'gpt-3.5-turbo-1106',
//           response_format: { type: 'json_object' },
//         });
    
//         return completion.choices[0].message.content;
//       } catch (error) {
//         console.error('Error fetching assistant response:', error);
//         throw error;
//       }
//     };

// export { openaiAssistant };  chill for now
 
