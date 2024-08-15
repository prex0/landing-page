'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { JA_TEXT } from '@/constants/ja/text';
import { EN_TEXT } from '@/constants/en/text';

type Language = 'ja' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  text: typeof JA_TEXT | typeof EN_TEXT;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ja');

  const text = language === 'ja' ? JA_TEXT : EN_TEXT;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, text }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};