import React from 'react';
import SecurityBanner from '../components/SecurityBanner';
import AIPlayground from '../components/AIPlayground';
import { Code, FileSpreadsheet, Layers } from 'lucide-react';

const Topic3: React.FC = () => {
  const vbaPromptExample = `我是會計助理，我有一個 Excel 檔案，裡面有一個名為 "RawData" 的工作表。
該工作表的 A 欄是 "供應商名稱"。
請幫我寫一段 VBA 程式碼 (Macro)，功能如下：
1. 根據 A 欄的供應商名稱，將資料篩選並分割。
2. 每個供應商的資料要複製到一個新的工作表。
3. 將每個新的工作表另存為獨立的 PDF 檔案，檔名為供應商名稱。
4. 儲存路徑為目前 Excel 檔案的同一個資料夾。
請提供完整的程式碼並加上註解。`;

  return (
    <div className="max-w-4xl mx-auto pb-10">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">主題 3：利用 ChatGPT 認識 VBA</h1>
      <SecurityBanner />

      {/* 1. Intro to VBA */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">1. 認識 VBA 與開發工具</h2>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Code className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">什麼是 VBA?</h3>
              <p className="text-slate-600 mb-4">
                Visual Basic for Applications (VBA) 是 Excel 內建的程式語言。以前我們需要買書學語法，現在有了 AI，我們只需要<strong>「清楚描述需求」</strong>，AI 就能幫我們寫程式。
              </p>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
                <h4 className="font-bold text-sm text-slate-700 mb-2">如何開啟開發人員模式：</h4>
                <ol className="list-decimal list-inside text-sm text-slate-600 space-y-1">
                  <li>在 Excel 上方功能區按右鍵，選擇「自訂功能區」。</li>
                  <li>在右側選單中，勾選「開發人員」。</li>
                  <li>點擊「確定」，你會看到上方多了一個「開發人員」分頁。</li>
                  <li>點擊「Visual Basic」按鈕即可貼上 AI 給你的程式碼。</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Practical Case 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">2. 實作案例：多個 Sheet 分割產生個別文件</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-1 space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 mb-3 text-blue-700 font-bold">
                <Layers className="w-5 h-5" />
                <span>情境描述</span>
              </div>
              <p className="text-sm text-slate-600">
                下載了一個包含所有供應商請款資料的總表。你需要將其拆分，分別寄給 50 家不同的供應商。
                <br /><br />
                <strong>傳統做法：</strong> 篩選 -> 複製 -> 開新檔 -> 貼上 -> 另存新檔 (重複 50 次)。
                <br /><br />
                <strong>AI + VBA 做法：</strong> 執行一段程式碼，10 秒完成。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 mb-3 text-green-700 font-bold">
                <FileSpreadsheet className="w-5 h-5" />
                <span>資料結構</span>
              </div>
              <ul className="text-sm text-slate-600 list-disc list-inside">
                <li>工作表名稱: RawData</li>
                <li>欄位 A: 供應商名稱</li>
                <li>欄位 B: 發票號碼</li>
                <li>欄位 C: 金額</li>
              </ul>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <AIPlayground 
              title="VBA 程式碼生成器"
              description="觀察下方的 Prompt 如何精確描述欄位、動作與儲存格式。點擊發送，讓 AI 寫出程式碼。"
              initialPrompt={vbaPromptExample}
              systemInstruction="你是 VBA 專家。請生成 Excel VBA 代碼。代碼必須包含錯誤處理。請只提供代碼和簡短的使用說明。"
            />
          </div>
        </div>
      </section>

      {/* 3. Open Practice */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">3. 實作：不設限自由發揮</h2>
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
          <h3 className="font-bold text-indigo-800 mb-2">給您的挑戰</h3>
          <p className="text-indigo-700 mb-4">
            回想一下你日常工作中最繁瑣、最重複的 Excel 動作是什麼？試著將其描述出來，並貼到上方的 AI 生成器中。
          </p>
          <ul className="text-sm text-indigo-600 list-disc list-inside space-y-1">
            <li>例如：合併多個 Excel 檔案為一個？</li>
            <li>例如：自動比對兩個工作表的差異？</li>
            <li>例如：根據日期自動寄送 Email？(進階)</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Topic3;