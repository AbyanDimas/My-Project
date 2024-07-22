import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const JurusanDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [jurusan, setJurusan] = useState<any>(null);
  const [allJurusan, setAllJurusan] = useState<any[]>([]);

  useEffect(() => {
    fetch(`http://192.168.100.2:1337/api/jurusans/${id}`)
      .then(response => response.json())
      .then(data => setJurusan(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  useEffect(() => {
    fetch(`http://192.168.100.2:1337/api/jurusans`)
      .then(response => response.json())
      .then(data => setAllJurusan(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!jurusan) {
    return <div>Loading...</div>;
  }

  const penulisNama = jurusan.attributes.Penulis_Artikel || "Penulis tidak diketahui";
  const penulisFotoURL = "https://via.placeholder.com/150"; // Placeholder URL untuk foto profil
  const formattedDate = new Date(jurusan.attributes.updatedAt).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row dark:text-gray-300 dark:bg-gray-900">
      <div className="w-full md:w-2/3 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl p-6 mb-4 md:mb-0 dark:bg-gray-800 dark:text-gray-300">
        <h1 className="text-2xl font-bold mb-4 dark:text-gray-200">{jurusan.attributes.Judul_Jurusan}</h1>
        <p className="text-base leading-relaxed mb-4">{jurusan.attributes.Deskripsi_Jurusan}</p>
        {jurusan.attributes.Text_Jurusan && (
          <div className="text-base leading-relaxed">
            <h2 className="text-xl font-semibold mb-2">Additional Information</h2>
            <ReactMarkdown
              components={{
                h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mb-4" {...props} />,
                h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mb-4" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-xl font-bold mb-4" {...props} />,
                h4: ({ node, ...props }) => <h4 className="text-lg font-bold mb-4" {...props} />,
                h5: ({ node, ...props }) => <h5 className="text-base font-bold mb-4" {...props} />,
                h6: ({ node, ...props }) => <h6 className="text-sm font-bold mb-4" {...props} />,
                p: ({ node, ...props }) => <p className="mb-4" {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4" {...props} />,
                ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4" {...props} />,
                li: ({ node, ...props }) => <li className="mb-2" {...props} />,
                blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4" {...props} />,
                a: ({ node, ...props }) => <a className="text-blue-600 hover:underline" {...props} />,
              }}
            >
              {jurusan.attributes.Text_Jurusan}
            </ReactMarkdown>
          </div>
        )}
      </div>
      <div className="w-full md:w-1/3 md:ml-4">
        <h2 className="text-xl font-bold mb-4 mt-8 text-center dark:text-gray-200">Penulis Artikel</h2>
        <div className="mt-8 p-6 rounded-lg shadow-lg bg-white flex flex-col items-center relative dark:bg-gray-800">
          <img
            src={penulisFotoURL}
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-gray-300 mb-4 dark:border-gray-600"
          />
          <h3 className="text-xl font-semibold dark:text-gray-200">{penulisNama}</h3>
          <span className="absolute bottom-2 left-2 text-xs text-gray-500 dark:text-gray-400">{formattedDate}</span>
        </div>
        <h2 className="text-xl font-bold mb-4 mt-8 text-center dark:text-gray-200">Akses Cepat ke Jurusan Lainnya</h2>
        <div className="space-y-4">
          {allJurusan.map(j => (
            <Link to={`/jurusan/${j.id}`} key={j.id}>
              <div
                className={`p-4 rounded shadow-md ${id === j.id ? 'bg-blue-200 border-2 border-blue-500' : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'} dark:border-gray-600`}
              >
                <h3 className="text-lg font-semibold dark:text-gray-200">{j.attributes.Judul_Jurusan}</h3>
                <p className="text-sm line-clamp-2 dark:text-gray-400">{j.attributes.Deskripsi_Jurusan}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JurusanDetail;
