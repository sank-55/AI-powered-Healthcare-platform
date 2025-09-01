import React from 'react';
import ChatWidget from '../components/ChatWidget';
// import UploadDoc from '../components/UploadDoc';

export default function ChatApp() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="mx-auto w-full max-w-4xl">
        {/* Outer card with soft border & shadow */}
        <div className="rounded-3xl bg-white border border-gray-100 shadow-lg overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between gap-4 px-6 py-5 md:px-8 md:py-6">
            <div className="flex items-center gap-4">
              {/* small logo / icon */}
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.657 0 3-1.567 3-3.5S13.657 1 12 1 9 2.567 9 4.5 10.343 8 12 8zM6 22a6 6 0 0112 0H6z" />
                </svg>
              </div>

              <div>
                <h1 className="text-lg md:text-2xl font-semibold text-slate-800">Pharma AI Assistant</h1>
                <p className="mt-0.5 text-xs md:text-sm text-slate-500">Ask medical questions based on uploaded documents — informational only.</p>
              </div>
            </div>

            <div className="text-right">
              <div className="text-xs text-slate-400">Demo • Minimal</div>
              <div className="mt-1 text-xs text-slate-500">v1.0</div>
            </div>
          </div>

          <div className="border-t border-gray-100" />

          {/* Main content: left panel (docs) + right panel (chat) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-6 md:px-8 md:py-8">
            {/* Left: Upload / Docs (minimal placeholder with dashed boundary) */}
            <aside className="md:col-span-1">
              <div className="flex flex-col gap-4">
                <div className="rounded-xl border border-dashed border-gray-200 bg-gradient-to-b from-white to-slate-50 p-4">
                  <h3 className="text-sm font-medium text-slate-700">Documents</h3>
                  <p className="mt-2 text-xs text-slate-500">Upload or paste medical notes, guidelines, or book chapters. The assistant will only use uploaded docs as context.</p>

                  <div className="mt-3 flex items-center gap-2">
                    <button
                      className="px-3 py-2 rounded-md text-sm bg-emerald-500 text-white hover:bg-emerald-600"
                      // onClick={() => openUploadModal()}
                    >
                      Upload / Paste
                    </button>
                    <button
                      className="px-3 py-2 rounded-md text-sm bg-white border border-gray-100 text-slate-600"
                      // onClick={() => loadExample()}
                    >
                      Load example
                    </button>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-100 bg-white p-3">
                  <h4 className="text-xs font-medium text-slate-600">Quick examples</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button className="text-xs px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700">Is paracetamol safe with ibuprofen?</button>
                    <button className="text-xs px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700">Symptoms of drug interaction</button>
                    <button className="text-xs px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700">Recommended OTC for headache</button>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-100 bg-white p-3 text-xs text-slate-500">
                  <strong>Note:</strong> This demo uses your uploaded documents as the only knowledge source. It is not medical advice.
                </div>
              </div>
            </aside>

            {/* Right: Chat area */}
            <main className="md:col-span-2">
              <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm flex flex-col h-[560px]">
                {/* subtle top bar for the chat card */}
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-sm font-medium text-slate-700">Assistant</h3>
                    <p className="text-xs text-slate-400">Answers are sourced from your uploaded documents and include citations.</p>
                  </div>
                  <div className="text-xs text-slate-400">Powered by LLM</div>
                </div>

                {/* Chat widget (fills remaining space) */}
                <div className="flex-1">
                  <ChatWidget />
                </div>
              </div>
            </main>
          </div>

          <div className="border-t border-gray-100" />

          {/* Footer */}
          <div className="px-6 py-4 md:px-8 md:py-5">
            <div className="text-xs text-slate-500 text-center">Demo only — always consult a qualified healthcare professional for medical advice.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
