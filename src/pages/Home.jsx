import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-gray-900">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-10 text-center">
        {/* Logos */}
        <div className="flex items-center gap-12 mb-8 flex-wrap justify-center">
          <img src="/iitdelhilogo.png" alt="IIT Delhi Logo" className="h-24 w-auto object-contain" />
          <img src="/scottishlogo.png" alt="Scottish International School Logo" className="h-24 w-auto object-contain" />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-blue-800 mb-5 tracking-tight">
          SIS Notes Portal
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-800 max-w-2xl leading-relaxed mb-6">
          Welcome to the notes portal for Classes 11 & 12 at{' '}
          <span className="font-semibold text-blue-700">Scottish International School</span>. Access
          crystal-clear, exam-ready notes — anytime, anywhere.
        </p>

        {/* Button */}
        <a
          href="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-6 py-3 rounded-xl shadow-md transition"
        >
          Explore Notes
        </a>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
