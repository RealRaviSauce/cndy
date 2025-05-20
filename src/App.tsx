import { Chatbot } from './components/Chatbot'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Chatbot 
        // initialMessage="👋 Hi! I'm your AI assistant. How can I help you today?"
        theme={{
          primary: "#007AFF",
          background: "#FFFFFF",
          text: "#000000"
        }}
      />
    </div>
  )
}

export default App 