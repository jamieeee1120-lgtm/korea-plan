
import React, { useState, useRef, useEffect } from 'react';
import { askTravelAssistant } from '../services/geminiService';
import { Send, Sparkles, User, Bot, Loader2 } from 'lucide-react';

interface AssistantProps {
  itineraryContext: string;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const AssistantSection: React.FC<AssistantProps> = ({ itineraryContext }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    
    setIsTyping(true);
    const aiResponse = await askTravelAssistant(userMsg, itineraryContext);
    setIsTyping(false);
    
    setMessages(prev => [...prev, { role: 'assistant', content: aiResponse || "抱歉，我無法提供回答。" }]);
  };

  return (
    <div className="flex flex-col h-[70vh] animate-slide-in">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles size={18} className="text-[#A68E7E]" />
        <h3 className="text-sm font-bold text-[#4A4A4A] tracking-widest uppercase">AI 旅行助手</h3>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex-1 bg-white/50 backdrop-blur-sm rounded-lg p-4 overflow-y-auto muji-scrollbar space-y-4 border border-white shadow-inner"
      >
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
              <Bot className="text-[#A68E7E]" />
            </div>
            <p className="text-xs text-[#9B9B9B] leading-relaxed italic">
              「你好！我是你的 AI 助手。<br/>你可以問我關於今天行程的建議，<br/>或是尋求交通和美食的推薦。」
            </p>
          </div>
        )}
        
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-lg text-sm ${
              msg.role === 'user' 
                ? 'bg-[#A68E7E] text-white rounded-tr-none' 
                : 'bg-white text-[#4A4A4A] border border-gray-100 rounded-tl-none shadow-sm'
            }`}>
              <div className="flex items-center gap-1 mb-1 opacity-50 text-[10px] font-bold uppercase tracking-wider">
                {msg.role === 'user' ? <><User size={10}/> User</> : <><Bot size={10}/> Assistant</>}
              </div>
              <p className="leading-relaxed">{msg.content}</p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white p-3 rounded-lg rounded-tl-none border border-gray-100 shadow-sm flex items-center gap-2">
              <Loader2 size={14} className="animate-spin text-[#A68E7E]" />
              <span className="text-xs text-[#9B9B9B]">正在思考中...</span>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="有什麼想問助手嗎？" 
          className="flex-grow bg-white border border-gray-100 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-[#A68E7E] shadow-sm"
        />
        <button 
          onClick={handleSend}
          disabled={isTyping}
          className="bg-[#7F212E] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:opacity-90 active:scale-95 transition-all disabled:opacity-50"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default AssistantSection;
