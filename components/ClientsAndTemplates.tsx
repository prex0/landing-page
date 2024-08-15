'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

interface ClientsAndTemplatesProps {
  id?: string;
}

const ClientsAndTemplates: React.FC<ClientsAndTemplatesProps> = ({ id }) => {
  const { text } = useLanguage();

  const clientsAndTemplates = [
    {
      name: 'awabar',
      description: 'Template 1 description',
      imageUrl: '/client1.png',
      xUrl: 'https://x.com/awabar_Fukuoka',
      githubUrl: '#',
    },
    {
      name: 'Client 2',
      description: 'Template 2 description',
      imageUrl: '/client2.png',
      xUrl: '#',
      githubUrl: '#',
    },
    {
      name: 'Client 3',
      description: 'Template 3 description',
      imageUrl: '/client3.png',
      xUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id={id} className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">{text.clientsAndTemplates.title}</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {text.clientsAndTemplates.description}
          </p>
        </div>
        <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {clientsAndTemplates.map((item, index) => (
            <li key={index} className="flex flex-col items-start">
              <div className="w-full h-80 relative rounded-2xl overflow-hidden">
                <Image 
                  src={item.imageUrl} 
                  alt={item.name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.name}</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">{item.description}</p>
              <ul className="mt-6 flex gap-x-6">
                <li>
                  <a href={item.xUrl} className="text-gray-400 hover:text-gray-500" target="_blank" rel="noopener noreferrer">
                    <span className="sr-only">X</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href={item.githubUrl} className="text-gray-400 hover:text-gray-500" target="_blank" rel="noopener noreferrer">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ClientsAndTemplates;