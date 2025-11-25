import React from 'react';
import SecurityBanner from '../components/SecurityBanner';
import { Command, Repeat, Search, FileText, PlayCircle } from 'lucide-react';

const Topic1: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto pb-10">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">主題 1：認識一般行政上解決的習慣</h1>
      <SecurityBanner />

      {/* Section 1: Shortcuts */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
          關鍵快速鍵 (Shortcuts)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-slate-100 px-3 py-1 rounded font-mono font-bold text-slate-700 border border-slate-300">F2</span>
              <Command className="text-blue-500 w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg mb-2">重新命名 / 編輯儲存格</h3>
            <p className="text-slate-600 text-sm">
              在檔案總管中選取檔案按 F2 可快速改名。在 Excel 中按 F2 可直接編輯儲存格內容，無需滑鼠點兩下。
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-slate-100 px-3 py-1 rounded font-mono font-bold text-slate-700 border border-slate-300">F4</span>
              <Repeat className="text-blue-500 w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg mb-2">重複上一次操作</h3>
            <p className="text-slate-600 text-sm">
              <span className="text-red-500 font-bold">最強大行政鍵！</span> 
              無論是刪除列、上色、合併儲存格，只要做一次，接下來按 F4 即可無限重複該動作。
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-slate-100 px-3 py-1 rounded font-mono font-bold text-slate-700 border border-slate-300">Ctrl + F</span>
              <Search className="text-blue-500 w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg mb-2">搜尋與取代</h3>
            <p className="text-slate-600 text-sm">
              不僅用於瀏覽器找資料，更是 Excel 中大量替換錯誤資訊的神器。
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: MS Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
          微軟必備技能
        </h2>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-l-indigo-500 flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <FileText className="w-8 h-8 text-indigo-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">WORD 合併列印</h3>
              <p className="text-sm text-slate-500 mb-2">應用場景：文件同格式，不同內容</p>
              <div className="bg-slate-50 p-3 rounded text-sm text-slate-700">
                <strong>實際案例：</strong> 二代健保扣繳憑單。雖然每個人扣繳金額不同，但憑單格式一樣。只需一個 Excel 名單和一個 Word 樣板，即可瞬間產生數百份憑單。
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-l-green-500 flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <PlayCircle className="w-8 h-8 text-green-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">EXCEL 錄製巨集 (Macro)</h3>
              <p className="text-sm text-slate-500 mb-2">應用場景：文件內相同動作重複，或固定格式處理</p>
              <div className="bg-slate-50 p-3 rounded text-sm text-slate-700">
                <strong>實際案例：</strong> 每天從系統下載的報表格式都很亂（如欄寬不對、需刪除前三列）。透過「錄製巨集」，將這些整理步驟錄下來，明天只需按一個按鈕即可完成。
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
        <h4 className="font-bold text-yellow-800 mb-2">小測驗：</h4>
        <p className="text-yellow-900 text-sm mb-2">
          當你需要將 50 個不同的 Excel 儲存格標記為黃色底色時，你會怎麼做最快？
        </p>
        <details className="cursor-pointer">
          <summary className="text-yellow-700 font-medium hover:text-yellow-900">查看答案</summary>
          <p className="mt-2 text-slate-800 bg-white p-2 rounded border border-yellow-100">
            先手動將第一個儲存格標為黃色，然後選取下一個儲存格按 <strong>F4</strong>，依此類推。F4 是「重複上一步」的神器。
          </p>
        </details>
      </div>
    </div>
  );
};

export default Topic1;