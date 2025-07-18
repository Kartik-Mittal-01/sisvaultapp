import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

const Notes = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Show loading for 1 second

    return () => clearTimeout(timeout); // Cleanup
  }, []);

  if (loading) return <Loading />;
  const sections = [
  {
    title: 'Class 11 - Physics',
    chapters: [
      { name: 'Fluid Mechanics', pdfname: 'fluid.pdf' },
      { name: 'Heat & Temperature', pdfname: 'heatandtemperature.pdf' },
      { name: 'Kinetic Theory of Gases', pdfname: 'ktg.pdf' },
      { name: 'Mechanical Properties of Solids', pdfname: 'mechanicalprop.pdf' },
      { name: 'Simple Harmonic Motion', pdfname: 'shm.pdf' },
      { name: 'Thermodynamics', pdfname: 'thermodynamics .pdf' },
      { name: 'Waves', pdfname: 'waves.pdf' },
    ],
  },
  {
    title: 'Class 11 - Chemistry',
    chapters: [
      
    ],
  },
  {
    title: 'Class 11 - Mathematics',
    chapters: [
      
    ],
  },
  {
    title: 'Class 12 - Physics',
    chapters: [
      { name: 'Electrostatics', pdfname: 'electrostatics .pdf' },
      { name: 'Current Electricity', pdfname: 'current electricity.pdf' },
      { name: 'Capacitor', pdfname: 'capacitor.pdf' },
    ],
  },
  {
    title: 'Class 12 - Chemistry',
    chapters: [
      
    ],
  },
  {
    title: 'Class 12 - Mathematics',
    chapters: [
      
    ],
  },
];

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Fixed Navbar at top */}
      <div className="flex-shrink-0">
        <Navbar />
      </div>

      {/* Scrollable main content */}
      <main className="flex-grow overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-200 text-gray-900 px-6 py-10">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">📚 Study Notes</h1>

        <div className="max-w-7xl mx-auto space-y-12">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">{section.title}</h2>

              <div className="overflow-x-auto rounded-lg shadow bg-white">
                <table className="min-w-full text-left border border-gray-300">
                  <thead className="bg-indigo-100">
                    <tr>
                      <th className="px-4 py-2 border-b border-gray-300">Sr. No.</th>
                      <th className="px-4 py-2 border-b border-gray-300">Chapter Name</th>
                      <th className="px-4 py-2 border-b border-gray-300">Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.chapters.map((chapter, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                        <td className="px-4 py-2 border-b border-gray-200">{i + 1}</td>
                        <td className="px-4 py-2 border-b border-gray-200">
                            {chapter.name.length > 17 ? `${chapter.name.slice(0, 17)}...` : chapter.name}
                        </td>
                        <td className="px-4 py-2 border-b border-gray-200">
                            <a
                            href={`/files/${chapter.pdfname}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                            >
                            View PDF
                            </a>
                        </td>
                        </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Fixed Footer at bottom */}
      <div className="flex-shrink-0">
        <Footer />
      </div>
    </div>
  );
};

export default Notes;
