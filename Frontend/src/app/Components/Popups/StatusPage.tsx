import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const StatusPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { status } = location.state as { status: 'success' | 'failure' };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4">
          {status === 'success' ? 'Form Berhasil Terkirim' : 'Form Gagal Terkirim'}
        </h2>
        <p className="mb-4">
          {status === 'success'
            ? 'Terima kasih atas saran Anda. Kami akan meninjau saran Anda segera.'
            : 'Maaf, terjadi kesalahan saat mengirim form Anda. Silakan coba lagi.'}
        </p>
        <button
          onClick={() => navigate('/forms')}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Kembali ke Form
        </button>
      </div>
    </div>
  );
};

export default StatusPage;
