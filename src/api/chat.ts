import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

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

    return new Response(JSON.stringify({
      message: response.choices[0].message.content
    }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to process request' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 