import React from 'react';
import { Link } from 'react-router-dom';
import SecurityBanner from '../components/SecurityBanner';
import { Keyboard, Brain, Code } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">歡迎來到 AdminAI 互動教學網</h1>
      <p className="text-slate-600 mb-8">結合傳統行政智慧與現代 AI 技術，提升你的工作效率。</p>
      
      <SecurityBanner />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <Link to="/habits" className="group">
          <div className="h-full bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
              <Keyboard className="w-6 h-6 text-blue-600 group-hover:text-white" />
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">主題 1: 行政習慣</h2>
            <p className="text-slate-600 text-sm">
              掌握 F2、F4 快速鍵，學習 Word 合併列印與 Excel 巨集錄製，打好基礎。
            </p>
          </div>
        </Link>

        {/* Card 2 */}
        <Link to="/chatgpt" className="group">
          <div className="h-full bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
              <Brain className="w-6 h-6 text-purple-600 group-hover:text-white" />
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">主題 2: 認識 ChatGPT</h2>
            <p className="text-slate-600 text-sm">
              學習精準問答架構、定義專家角色，並利用 AI 解決 Excel 公式與信件撰寫。
            </p>
          </div>
        </Link>

        {/* Card 3 */}
        <Link to="/vba" className="group">
          <div className="h-full bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
              <Code className="w-6 h-6 text-green-600 group-hover:text-white" />
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">主題 3: ChatGPT x VBA</h2>
            <p className="text-slate-600 text-sm">
              不需精通程式碼，學會如何指揮 AI 撰寫 VBA，實現多工作表自動分割存檔。
            </p>
          </div>
        </Link>
      </div>

      <div className="mt-12 bg-white rounded-xl p-8 shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold text-slate-800 mb-4">課程核心理念</h3>
        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li><strong>安全性優先：</strong>所有操作皆在去識別化環境下進行。</li>
          <li><strong>實用導向：</strong>直接針對行政痛點（如大量重複檔案）提供解方。</li>
          <li><strong>人機協作：</strong>人類負責邏輯判斷與審核，AI 負責執行繁瑣代碼。</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;