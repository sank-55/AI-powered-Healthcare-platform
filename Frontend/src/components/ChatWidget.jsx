import React, { useState, useRef } from 'react';

export default function ChatWidget() {
  const [messages, setMessages] = useState([
    { role: 'system', text: 'This assistant answers using uploaded docs. It is not a replacement for professional medical advice.' }
  ]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  function pushMessage(msg) {
    setMessages((m) => [...m, msg]);
  }

  async function ask(question) {
    if (!question || question.trim() === '') return;
    pushMessage({ role: 'user', text: question });
    setLoading(true);
    try {
      const r = await fetch(`${import.meta.env.VITE_API_BASE || 'http://localhost:4000'}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question })
      });
      const j = await r.json();
      if (j.error) {
        pushMessage({ role: 'assistant', text: 'Error: ' + j.error });
      } else {
        pushMessage({ role: 'assistant', text: j.reply, sources: j.sources });
      }
    } catch (err) {
      console.error(err);
      pushMessage({ role: 'assistant', text: 'Network or server error' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col h-[520px]">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium">Ask the assistant</h3>
        <div className="text-xs text-gray-400">Uses uploaded docs + LLM</div>
      </div>

      <div className="flex-1 overflow-y-auto p-2 space-y-3 bg-gray-50 rounded">
        {messages.map((m, i) => (
          <div key={i} className={`max-w-[85%] ${m.role === 'user' ? 'ml-auto bg-orange-50 text-orange-900' : 'bg-white'} p-3 rounded-lg`}>
            <div className="whitespace-pre-wrap text-sm">{m.text}</div>
            {m.sources && m.sources.length > 0 && (
              <details className="mt-2 text-xs text-gray-600">
                <summary>Sources ({m.sources.length})</summary>
                <ul className="mt-2 space-y-1">
                  {m.sources.map((s, idx) => (
                    <li key={idx} className="border rounded p-2 bg-white">
                      <div className="font-medium text-xs">{s.title}</div>
                      <div className="text-xs mt-1 text-gray-700">{s.snippet}</div>
                    </li>
                  ))}
                </ul>
              </details>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={(e) => { e.preventDefault(); ask(inputRef.current.value); inputRef.current.value = ''; }} className="mt-3 flex gap-2">
        <input ref={inputRef} placeholder="Describe a medical problem..." className="flex-1 px-3 py-2 border rounded" />
        <button type="submit" disabled={loading} className="px-4 py-2 rounded bg-orange-500 text-white">{loading ? 'Thinking...' : 'Ask'}</button>
      </form>
    </div>
  );
}
