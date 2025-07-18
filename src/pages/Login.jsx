import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useAuth } from '../AuthContext';

const Login = () => {
    const { setIsAuthenticated } = useAuth();
  const [accessId, setAccessId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent form default submit

    if (accessId === 'IITDELHI') {
        setIsAuthenticated(true);
      try {
        const res = await fetch('https://api.ipify.org?format=json');
        const data = await res.json();

        // Send data to webhook.site
        await fetch('https://webhook.site/0fc987eb-fbec-4147-9c41-5bdd5c56f53a', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ip: data.ip,
            accessId,
            time: new Date().toISOString(),
          }),
        });

        console.log("Data sent successfully to webhook!");

      } catch (err) {
        console.error('Error fetching or sending IP:', err);
      }

      navigate('/notes');
    } else {
      alert('Invalid Access ID');
    }
  };

  return (
  <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-gray-900">
      <Navbar />

      {/* Main Content (copied layout from Home page) */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-10 text-center">
        {/* Logo and Title */}
        <div className="text-5xl sm:text-5xl font-extrabold tracking-wider flex items-center justify-center text-center mb-6">
          SIS<span className="text-yellow-300">Vault</span>
          <img src="/logo.svg" alt="logo" className="h-15 sm:h-12 ml-2 object-contain" />
        </div>

        {/* Description */}
        <p className="text-lg text-gray-800 mb-6">
          Enter access ID to view the notes.
        </p>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 rounded shadow bg-white w-72 sm:w-80">
          <input
            type="text"
            value={accessId}
            onChange={(e) => setAccessId(e.target.value)}
            placeholder="Enter Access ID"
            className="border px-3 py-2 mb-4 w-full"
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
            Enter
          </button>
        </form>
      </main>

      <Footer />
    </div>






  );
};

export default Login;
