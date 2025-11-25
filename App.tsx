import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Topic1 from './pages/Topic1';
import Topic2 from './pages/Topic2';
import Topic3 from './pages/Topic3';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex">
        {/* Mobile Header */}
        <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-slate-200 p-4 z-20 flex justify-between items-center shadow-sm">
           <div className="font-bold text-slate-800">Admin AI Class</div>
           <button onClick={toggleMobileMenu} className="text-slate-600">
             {isMobileMenuOpen ? <X /> : <Menu />}
           </button>
        </div>

        {/* Sidebar (Desktop & Mobile Wrapper) */}
        <div className={`
          fixed inset-0 z-30 bg-black/50 md:hidden transition-opacity duration-300
          ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `} onClick={toggleMobileMenu}></div>
        
        <div className={`
          fixed md:relative z-40 transition-transform duration-300 transform 
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <main className="flex-1 p-6 md:p-10 mt-16 md:mt-0 md:ml-64 transition-all w-full overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/habits" element={<Topic1 />} />
            <Route path="/chatgpt" element={<Topic2 />} />
            <Route path="/vba" element={<Topic3 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;