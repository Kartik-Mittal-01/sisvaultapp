import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8 w-full px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Maintainers */}
        <div>
          <p className="text-base font-light">
            Maintained by{' '}
            <span className="font-semibold text-white">
              Kartik Mittal
            </span>{' '} <br/>
            (IIT Delhi, 3rd Year Undergraduate)
          </p>
          <p className="text-base font-light">
            Under the guidance of{' '} <br/>
            <span className="font-semibold text-white">Ms. Suruchi</span>{' '}
            (Coord.) &{' '}
            <span className="font-semibold text-white">Mr. Mohit</span>{' '}
            (P.G.T Chemistry)
          </p>
        </div>

        {/* Divider */}
        <hr className="border-gray-600 my-4" />

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()}{' '}
          <span className="text-blue-400 font-semibold">SIS Vault</span> — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
