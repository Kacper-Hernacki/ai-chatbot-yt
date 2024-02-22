'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="mx-auto w-full max-w-md py-24 flex flex-col justify-between min-h-screen">
      <div className="flex flex-col gap-4 overflow-auto">
        {messages.map(m => (
          <div
            key={m.id}
            className={`p-4 rounded-lg ${m.role === 'user' ? 'bg-blue-200 text-blue-900' : 'bg-green-200 text-green-900'} my-2`}
          >
            <span className="font-semibold">{m.role === 'user' ? 'You: ' : 'AI: '}</span>
            {m.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex items-center gap-2 p-2">
          <input
            className="w-full max-w-md rounded shadow-sm p-2 text-black"
            placeholder="Say something..."
            value={input}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}