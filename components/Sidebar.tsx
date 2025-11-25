import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Keyboard, MessageSquare, FileCode, ShieldCheck } from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-blue-100 text-blue-700 border-r-4 border-blue-600' : 'text-slate-600 hover:bg-slate-100';
  };

  const navItems = [
    { path: '/', label: '首頁總覽', icon: Home },
    { path: '/habits', label: '主題 1: 行政解決習慣', icon: Keyboard },
    { path: '/chatgpt', label: '主題 2: 認識 ChatGPT', icon: MessageSquare },
    { path: '/vba', label: '主題 3: ChatGPT 與 VBA', icon: FileCode },
  ];

  return (
    <aside className="w-64 bg-white h-screen fixed left-0 top-0 shadow-xl z-10 hidden md:flex flex-col">
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center gap-2 font-bold text-xl text-slate-800">
          <ShieldCheck className="text-blue-600" />
          <span>Admin AI Class</span>
        </div>
        <p className="text-xs text-slate-500 mt-2">高效行政與資安並重</p>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-6 py-3 transition-colors ${isActive(item.path)}`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-slate-200">
        <div className="bg-blue-50 p-3 rounded-lg text-xs text-blue-800">
          <strong>今日提示：</strong>
          <br />
          使用 F4 鍵可以重複上一步操作，這在 Excel 格式調整時非常有用！
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;