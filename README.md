# Custom Chatbot Component

A customizable chatbot component that can be embedded in Framer websites and uses a custom OpenAI assistant.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory and add your OpenAI API key:
```
OPENAI_API_KEY=your_api_key_here
```

3. Start the development server:
```bash
npm run dev
```

## Usage in Framer

1. Build the component:
```bash
npm run build
```

2. In your Framer project, add a custom code component and import the Chatbot:
```tsx
import { Chatbot } from './path/to/Chatbot';

export default function CustomCode() {
  return <Chatbot />;
}
```

## Customization

- Modify the system prompt in `src/api/chat.ts` to match your custom assistant's instructions
- Adjust the styling in `src/components/Chatbot.tsx` to match your website's theme
- Update the model in `src/api/chat.ts` to use your custom assistant's model

## Features

- Smooth animations using Framer Motion
- Responsive design
- Loading states
- Auto-scrolling messages
- TypeScript support
- Tailwind CSS styling 