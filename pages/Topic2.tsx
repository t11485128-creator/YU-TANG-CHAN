import React, { useState } from 'react';
import SecurityBanner from '../components/SecurityBanner';
import AIPlayground from '../components/AIPlayground';
import { User, MessageSquare, Target } from 'lucide-react';

const Topic2: React.FC = () => {
  // State for the prompt builder
  const [role, setRole] = useState('資深行政專員');
  const [context, setContext] = useState('需要整理一份混亂的會議記錄');
  const [task, setTask] = useState('提取待辦事項並列出負責人');
  const [constraint, setConstraint] = useState('用表格呈現，欄位包含：事項、負責人、期限');

  const builtPrompt = `我是${role}，${context}，問題為${task}，需要產出${constraint}。`;

  return (
    <div className="max-w-4xl mx-auto pb-10">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">主題 2：認識 ChatGPT 與 提問技巧</h1>
      <SecurityBanner />

      {/* 1. How to Ask */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">1. 如何問答：黃金公式</h2>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <p className="mb-4 text-slate-600">
            一個好的 Prompt (提示詞) 就像指派任務給工讀生，必須說清楚人事時地物。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border p-4 rounded bg-blue-50 border-blue-100">
              <h3 className="font-bold text-blue-800 flex items-center gap-2">
                <User className="w-4 h-4" /> 我是誰 (Role)
              </h3>
              <p className="text-xs text-blue-600 mt-1">設定你的身分或 AI 的角色</p>
            </div>
            <div className="border p-4 rounded bg-green-50 border-green-100">
              <h3 className="font-bold text-green-800 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" /> 背景 (Context)
              </h3>
              <p className="text-xs text-green-600 mt-1">目前的情況、來源資料</p>
            </div>
            <div className="border p-4 rounded bg-purple-50 border-purple-100">
              <h3 className="font-bold text-purple-800 flex items-center gap-2">
                <Target className="w-4 h-4" /> 任務 (Task)
              </h3>
              <p className="text-xs text-purple-600 mt-1">具體要解決的問題</p>
            </div>
            <div className="border p-4 rounded bg-orange-50 border-orange-100">
              <h3 className="font-bold text-orange-800 flex items-center gap-2">
                <Target className="w-4 h-4" /> 產出 (Output)
              </h3>
              <p className="text-xs text-orange-600 mt-1">格式 (表格/條列/Code)、範圍</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Prompt Builder */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">2. 實作：制定所需專家</h2>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
          <h3 className="font-bold mb-4">Prompt 產生器</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase">我是...</label>
              <input 
                type="text" 
                value={role} 
                onChange={(e) => setRole(e.target.value)}
                className="w-full border border-slate-300 p-2 rounded mt-1" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase">需要從 / 背景...</label>
              <input 
                type="text" 
                value={context} 
                onChange={(e) => setContext(e.target.value)}
                className="w-full border border-slate-300 p-2 rounded mt-1" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase">問題為...</label>
              <input 
                type="text" 
                value={task} 
                onChange={(e) => setTask(e.target.value)}
                className="w-full border border-slate-300 p-2 rounded mt-1" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase">需要產出 / 範圍...</label>
              <input 
                type="text" 
                value={constraint} 
                onChange={(e) => setConstraint(e.target.value)}
                className="w-full border border-slate-300 p-2 rounded mt-1" 
              />
            </div>
          </div>
          
          <div className="bg-slate-100 p-4 rounded-lg mb-4">
            <p className="text-sm font-mono text-slate-600 mb-1">組合後的 Prompt:</p>
            <p className="font-medium text-slate-800">{builtPrompt}</p>
          </div>

          {/* Connect to AI Playground */}
          <AIPlayground 
            title="測試你的 Prompt" 
            description="將上方組合好的指令發送給 AI，看看它如何回應。"
            initialPrompt={builtPrompt}
          />
        </div>
      </section>

      {/* 3. Admin Solutions */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">3. 簡易行政解決方式</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg mb-2 text-indigo-700">Excel 公式撰寫</h3>
            <p className="text-sm text-slate-600 mb-4">
              不要死背公式。描述你的數據結構（例如：A欄是姓名，B欄是分數），問 AI 如何計算。
            </p>
            <div className="bg-slate-50 p-2 rounded text-xs text-slate-500 font-mono">
              Prompt: "我的 Excel A1 到 A10 是產品單價，B1 到 B10 是數量，請給我一個公式計算加權平均價格。"
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg mb-2 text-pink-700">寫信範例</h3>
            <p className="text-sm text-slate-600 mb-4">
              寫正式 Email 很花時間？給 AI 重點關鍵字，讓它幫你潤飾。
            </p>
            <div className="bg-slate-50 p-2 rounded text-xs text-slate-500 font-mono">
              Prompt: "幫我寫一封信給客戶，禮貌地催繳尾款，提到合約約定付款日是上週五，並附上匯款資訊。"
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Topic2;