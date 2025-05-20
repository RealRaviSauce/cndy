import { Chatbot } from './components/Chatbot';

// Export for Framer
export default function CustomCode() {
  return (
    <Chatbot 
      // initialMessage="👋 Hi! I'm your AI assistant. How can I help you today?"
      theme={{
        primary: "#007AFF",
        background: "#FFFFFF",
        text: "#000000"
      }}
    />
  );
}

// Export the component directly for other uses
export { Chatbot }; 