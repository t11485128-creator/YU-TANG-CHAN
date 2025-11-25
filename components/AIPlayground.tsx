import React, { useState } from 'react';
import { generateResponse } from '../services/geminiService';
import { Send, Loader2, Sparkles } from 'lucide-react';

interface AIPlaygroundProps {
  initialPrompt?: string;
  title: string;
  description: string;
  systemInstruction?: string;
}

const AIPlayground: React.FC<AIPlaygroundProps> = ({ initialPrompt = '', title, description, systemInstruction }) => {
  const [prompt, setPrompt] = useState(initialPrompt);
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse('');
    try {
      const result = await generateResponse(prompt, systemInstruction);
      setResponse(result);
    } catch (e) {
      setResponse('發生錯誤，請稍後再試。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden my-8">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 text-white">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
        <p className="text-indigo-100 text-sm mt-1">{description}</p>
      </div>

      <div className="p-6">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          輸入提示詞 (Prompt):
        </label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full h-32 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all font-mono text-sm"
          placeholder="在此輸入你的指令..."
        />
        
        <div className="flex justify-end mt-4">
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            {loading ? 'AI 思考中...' : '發送給 AI 專家'}
          </button>
        </div>

        {response && (
          <div className="mt-6 animate-fade-in">
            <h4 className="text-sm font-bold text-slate-700 mb-2">AI 回覆:</h4>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 overflow-x-auto">
              <pre className="whitespace-pre-wrap text-sm text-slate-800 font-mono">{response}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIPlayground;