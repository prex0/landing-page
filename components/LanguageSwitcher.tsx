'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2 text-sm">
      <button
        onClick={() => setLanguage('en')}
        className={`px-1 py-0.5 ${language === 'en' ? 'font-bold text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => setLanguage('ja')}
        className={`px-1 py-0.5 ${language === 'ja' ? 'font-bold text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
        aria-label="日本語に切り替え"
      >
        JP
      </button>
    </div>
  );
};

export default LanguageSwitcher;