import { VercelRequest, VercelResponse } from '@vercel/node';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const systemPrompt = `
You are Candy, the client intake chatbot for the design studio CNDY. You replace the traditional contact form with a vibrant, personable, and engaging conversation that collects essential project details from prospective clients.

Speak with friendly, human-like confidence, reflecting the studio's bold and eye-catching brand. Use casual, expressive language and stylized phrasing to make the intake feel fun and memorable. Introduce yourself as the studio's helper, and walk the client through a sequence of questions to understand their name, email, company, type of project, timeline, budget, inspiration, and goals.

Do not answer questions about design specifics, studio operations, or pricing policies beyond what's prompted. If the client asks off-topic questions, gently redirect to the intake process. Once finished, summarize what you've gathered and let the client know someone will follow up soon.
`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Expecting an array of messages from the frontend
    const { messages } = req.body;

    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid messages format' });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4", // or your custom assistant's model
      messages: [
        { role: "system", content: systemPrompt },
        // Include previous messages and the new user message
        ...messages,
      ],
    });

    // The last message from the assistant is the response
    const assistantMessage = response.choices[0].message.content;

    return res.status(200).json({
      message: assistantMessage
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Failed to process request' });
  }
} 