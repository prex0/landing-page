import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-center lg:px-8">
        <div>
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Teliha Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;