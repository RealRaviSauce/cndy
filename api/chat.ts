import { VercelRequest, VercelResponse } from '@vercel/node';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;

    const response = await openai.chat.completions.create({
      model: "gpt-4", // or your custom assistant's model
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant." // Customize this based on your assistant's instructions
        },
        {
          role: "user",
          content: message
        }
      ],
    });

    return res.status(200).json({
      message: response.choices[0].message.content
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Failed to process request' });
  }
} 