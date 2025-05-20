# Cndy Chatbot

A customizable chatbot component that can be easily embedded in Framer websites and uses a custom OpenAI assistant.

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

2. In your Framer project:
   - Add a new "Code" component
   - Copy the contents of `dist/cndy-chatbot.es.js`
   - Paste it into the Code component
   - The chatbot will automatically appear in your Framer project

3. To customize the chatbot in Framer:
   - Add props to the CustomCode component:
   ```tsx
   export default function CustomCode() {
     return <Chatbot 
       // Optional props
       initialMessage="Hello! How can I help you?"
       theme={{
         primary: "#007AFF",
         background: "#FFFFFF",
         text: "#000000"
       }}
     />;
   }
   ```

## Features

- Smooth animations using Framer Motion
- Responsive design
- Loading states
- Auto-scrolling messages
- TypeScript support
- Tailwind CSS styling
- Easy Framer integration
- Customizable theme
- Environment variable support

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build 