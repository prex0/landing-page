'use client';

import React, { useState } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useLanguage } from '@/contexts/LanguageContext';
import Tooltip from '../components/Tooltip';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

interface SampleCodeProps {
  id?: string;
}

interface CodeSample {
  name: string;
  code: string;
  preview?: React.ReactNode | (({ onTransferComplete }: { onTransferComplete: () => void }) => React.ReactNode);
}

// 言語ファイルの型定義を更新
interface LanguageText {
  sampleCode: {
    title: string;
    subtitle: string;
    description: string;
    samples: {
      account: string;
      transfer: string;
      transfer2D: string;
      receive: string;
    };
    previewLabel: string;
    transferCompleteAlt: string;
  };
  // ... 他の言語関連の型定義
}

const sampleCodes: CodeSample[] = [
  {
    name: 'account',
    code: `<PrexMyAccount />`
  },
  {
    name: 'transfer',
    code: `<PrexTransfer
  token='0x00' amount={1n} to={'0x00'}>
  <button className='p-3 w-40 rounded bg-blue-500 hover:bg-blue-400 text-white shadow font-bold'>
    送付する
  </button>
</PrexTransfer>`,
    preview: ({ onTransferComplete }: { onTransferComplete: () => void }) => (
      <div className="flex items-center space-x-4">
        <Tooltip content="クリックすると送付が完了します">
          <button 
            className='p-3 w-40 rounded bg-blue-500 hover:bg-blue-400 text-white shadow font-bold'
            onClick={onTransferComplete}
          >
            送付する
          </button>
        </Tooltip>
        <ArrowRightIcon className="h-6 w-6 text-gray-400" />
      </div>
    )
  },
  {
    name: 'transfer2D',
    code: `<PrexLinkTransfer
  token='0x00'
  amount={1n}
  baseURL='http://localhost:3000'
  expiration={100000}>
  <button className='p-3 w-40 rounded bg-blue-500 hover:bg-blue-400 text-white shadow'>
    送付リンクを作る
  </button>
</PrexLinkTransfer>`
  },
  {
    name: 'receive',
    code: `<PrexReceiveView id={''} secret={''} />`
  }
];

const SampleCode: React.FC<SampleCodeProps> = ({ id }) => {
  const [selectedSample, setSelectedSample] = useState(sampleCodes[0]);
  const [transferComplete, setTransferComplete] = useState(false);
  const { text } = useLanguage() as { text: LanguageText };  // 型アサーションを追加

  const handleTransferComplete = () => {
    setTransferComplete(true);
    setTimeout(() => setTransferComplete(false), 3000); // 3秒後に元に戻す
  };

  return (
    <section id={id} className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            {text.sampleCode.title}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {text.sampleCode.subtitle}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {text.sampleCode.description}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <div className="grid grid-cols-2 gap-4">
              {sampleCodes.map((sample) => (
                <button
                  key={sample.name}
                  onClick={() => setSelectedSample(sample)}
                  className={`px-4 py-2 text-center rounded-md transition-colors duration-200 ${
                    selectedSample.name === sample.name
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                  aria-pressed={selectedSample.name === sample.name}
                >
                  {text.sampleCode.samples[sample.name as keyof typeof text.sampleCode.samples]}
                </button>
              ))}
            </div>
          </div>
          <div className="lg:w-2/3">
            {selectedSample.preview && (
              <div className="mb-4 p-4 border rounded-md bg-gray-50">
                <p className="text-sm text-gray-600 mb-2">{text.sampleCode.previewLabel}</p>
                <div className="flex items-center space-x-4">
                  {typeof selectedSample.preview === 'function' 
                    ? selectedSample.preview({ onTransferComplete: handleTransferComplete })
                    : selectedSample.preview}
                  {transferComplete && (
                    <Image 
                      src="/transfer-complete.png" 
                      alt={text.sampleCode.transferCompleteAlt}
                      width={100} 
                      height={100}
                    />
                  )}
                </div>
              </div>
            )}
            <SyntaxHighlighter
              language="javascript"
              style={oneDark}
              className="rounded-md"
              wrapLines={true}
              showLineNumbers={true}
            >
              {selectedSample.code}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleCode;