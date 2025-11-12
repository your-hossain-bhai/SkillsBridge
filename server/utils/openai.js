import axios from 'axios';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

export const getCareerAdvice = async (userInput) => {
    try {
        const response = await axios.post(OPENAI_API_URL, {
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'user', content: userInput }
            ],
            max_tokens: 150,
        }, {
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            }
        });

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error fetching career advice from OpenAI:', error);
        throw new Error('Could not fetch career advice');
    }
};