import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormsActions from '../Components/Popups/FormsActions';

const Forms: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handlePopupSubmit = () => {
    // Simulasikan pengiriman form
    const isSuccess = Math.random() > 0.5; // Simulasikan berhasil/gagal

    // Reset form
    setName('');
    setEmail('');
    setSuggestion('');
    setShowPopup(false);

    // Navigasi ke halaman status
    navigate('/status', { state: { status: isSuccess ? 'success' : 'failure' } });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleCancel = () => {
    setName('');
    setEmail('');
    setSuggestion('');
    setShowPopup(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="backdrop-blur-sm bg-white/30 rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden w-full max-w-4xl">
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src="https://smkn1adw.sch.id/fp/sites/default/files/SLIDE%201.jpg"
            alt="Sekolah"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">Kotak Saran</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nama
              </label>
              <input
                id="name"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="suggestion">
                Saran
              </label>
              <textarea
                id="suggestion"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={handleCancel}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Batalkan
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
      {showPopup && <FormsActions onCancel={handleCancel} onConfirm={handlePopupSubmit} />}
    </div>
  );
};

export default Forms;
