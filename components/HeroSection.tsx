'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const { text } = useLanguage();

  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <h1 className="mt-10 max-w-lg text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {text.hero.title.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index === 0 && <br />}
              </React.Fragment>
            ))}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {text.hero.subTitle}
          </p>
          <ul className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600">
            {text.hero.keyPoints.map((point, index) => (
              <li key={index} className="flex gap-x-3">
                <svg className="h-7 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="https://dev-dashboard.prex0.com/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {text.hero.cta}
            </a>
            <a href="https://docs.prex0.com/docs/" className="text-sm font-semibold leading-6 text-gray-900">
              {text.hero.learnMore} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
          <div className="relative mx-auto w-full max-w-xl lg:max-w-lg xl:max-w-xl">
            <video
              className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/transfer.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;