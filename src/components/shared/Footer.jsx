import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MyApp. All rights reserved.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Made with ❤️ by Your Team
        </p>
      </div>
    </footer>
  );
};

export default Footer;
