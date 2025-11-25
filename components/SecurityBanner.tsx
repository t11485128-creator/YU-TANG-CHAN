import React from 'react';
import { ShieldAlert } from 'lucide-react';

const SecurityBanner: React.FC = () => {
  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 mx-4 md:mx-0 shadow-sm rounded-r-md">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <ShieldAlert className="h-5 w-5 text-red-500" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">
            資料安全性核心原則
          </h3>
          <div className="mt-2 text-sm text-red-700">
            <p>
              這是應用上的最大底線：在使用任何 AI 工具（如 ChatGPT、Gemini）時，
              <strong> 絕不輸入任何機敏資料（個資、公司財務數據、客戶名單等）</strong>。
              請務必將敏感資訊去識別化（例如：將「王小明」改為「員工A」，將真實金額改為虛擬數字）後再進行提問。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityBanner;