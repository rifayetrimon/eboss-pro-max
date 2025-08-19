'use client';

import { useState, useRef, useEffect } from 'react';
import { FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { BiMessageDetail } from 'react-icons/bi';
import { GoogleGenerativeAI } from '@google/generative-ai';

const animatedBorderStyle = `
.animated-border-button {
  position: relative;
  overflow: hidden;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  background-color: #f3f4f6;
  box-shadow: 0 0 5px rgba(0, 70, 255, 0.3), 0 0 10px rgba(255, 59, 63, 0.3);
}

.dark .animated-border-button {
  border-color: #4b5563;
  background-color: #1f2937;
}

.animated-border-button::before {
  content: '';
  position: absolute;
  top: -200%;
  left: -200%;
  width: 500%;
  height: 500%;
  background: conic-gradient(
    from 0deg,
    transparent 0%,
    transparent 35%,
    #0046FF 35%,
    #FF3B3F 65%,
    transparent 65%,
    transparent 100%
  );
  animation: rotateConic 3s linear infinite;
  z-index: 0;
}

.animated-border-button::after {
  content: '';
  position: absolute;
  top: 1px;
  right: 1px;
  bottom: 1px;
  left: 1px;
  background-color: #f3f4f6;
  border-radius: inherit;
  z-index: 1;
}

.dark .animated-border-button::after {
  background-color: #1f2937;
}

.animated-border-button > span {
  position: relative;
  z-index: 2;
  background-color: transparent;
  display: block;
  padding: 0.75rem 1rem;
}

@keyframes rotateConic {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

export default function ComponentsAppsAI() {
    const suggestions = ["What's Eboss?", 'How do I sign up for Eboss?'];
    const [isHelpMenuOpen, setIsHelpMenuOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [conversation, setConversation] = useState([]);

    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const inputRef = useRef(null);
    const chatContainerRef = useRef(null);

    const toggleHelpMenu = () => {
        setIsHelpMenuOpen(!isHelpMenuOpen);
    };

    const handleSendMessage = async (e) => {
        if (e) e.preventDefault();
        const userMessage = inputValue.trim();
        if (!userMessage) return;

        setIsLoading(true);
        setInputValue('');

        try {
            setConversation((prev) => [...prev, { role: 'user', text: userMessage }]);

            const result = await model.generateContent(userMessage);
            const response = await result.response;
            const text = response.text();

            setConversation((prev) => [...prev, { role: 'gemini', text: text }]);
        } catch (error) {
            console.error('Error calling Gemini API:', error);
            setConversation((prev) => [...prev, { role: 'gemini', text: 'Sorry, something went wrong. Please try again.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    // Auto-scroll to bottom when new messages are added
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [conversation]);

    return (
        <>
            <style jsx global>{`
                ${animatedBorderStyle}
            `}</style>
            <div className="panel px-6 pt-1 pb-6 h-screen flex flex-col text-black dark:text-white bg-white dark:bg-black">
                <div className="flex-1 mt-44 flex flex-col min-h-0">
                    {/* Chat area with fixed height and scroll */}
                    <div ref={chatContainerRef} className="flex-1 overflow-y-auto flex flex-col">
                        {/* Title section - always at top of scrollable area */}
                        <div className={`flex flex-col items-center ${conversation.length === 0 ? 'justify-center flex-1' : 'py-6'}`}>
                            <h1 className="text-3xl font-bold mb-6 text-center">What do you want to know?</h1>

                            {/* Only show suggestion buttons when conversation is empty */}
                            {conversation.length === 0 && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 w-full max-w-xl">
                                    <button
                                        className={`w-full text-gray-900 dark:text-gray-100 text-left transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 animated-border-button`}
                                    >
                                        <span className="relative z-10">{suggestions.at(0)}</span>
                                    </button>
                                    <button
                                        className={`w-full px-4 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-left py-3 transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700`}
                                    >
                                        {suggestions.at(1)}
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Chat messages */}
                        {conversation.length > 0 && (
                            <div className="w-full max-w-xl mx-auto px-4 pb-4">
                                {conversation.map((message, index) => (
                                    <div key={index}>
                                        <div className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                                            <p className={`mb-2 ${message.role === 'user' ? 'inline-block bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-lg' : ''}`}>{message.text}</p>
                                            <div className={`flex space-x-2 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                                <button onClick={() => copyToClipboard(message.text)} className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                                                    Copy
                                                </button>
                                                <button className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">Like</button>
                                                <button className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">Dislike</button>
                                            </div>
                                        </div>
                                        {index < conversation.length - 1 && <hr className="my-4 border-gray-100 dark:border-gray-800" />}
                                    </div>
                                ))}
                                {isLoading && <div className="text-center text-gray-500 dark:text-gray-400 mt-2">Thinking...</div>}
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex-shrink-0 flex mb-40 flex-col items-center pt-4">
                    <form onSubmit={handleSendMessage} className="relative w-full max-w-xl mb-4">
                        <textarea
                            ref={inputRef}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Ask anything..."
                            className="w-full h-20 px-4 pt-3 pr-12 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none resize-none"
                        />
                        <button type="submit" className="absolute right-4 top-2 text-gray-400 dark:text-gray-500">
                            <FiSend size={20} />
                        </button>
                    </form>

                    <div className="flex justify-between w-full max-w-xl text-sm text-gray-500 dark:text-gray-400">
                        <span>
                            Powered by <b>awfatech</b> & <b>EBOSS</b>
                        </span>
                        <div className="relative">
                            <button
                                onClick={toggleHelpMenu}
                                className="px-4 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                Get help
                            </button>
                            {isHelpMenuOpen && (
                                <div className="absolute right-0 bottom-full mb-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800" role="menuitem">
                                            <BiMessageDetail className="h-4 w-4 mr-2" />
                                            Eboss Support
                                        </a>
                                        <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800" role="menuitem">
                                            <FaWhatsapp className="h-4 w-4 mr-2 text-green-500" />
                                            Whatsapp
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
