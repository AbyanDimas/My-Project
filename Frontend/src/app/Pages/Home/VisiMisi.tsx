import React from 'react';
import { School, Visibility, Favorite, Flag } from '@mui/icons-material';

const VisiMisi = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 w-64 text-center">
          <div className="bg-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
            <School />
          </div>
          <h3 className="text-xl font-semibold mb-2">Mission</h3>
          <p className="text-gray-600">Menyelenggarakan pendidikan yang berkualitas untuk menghasilkan lulusan yang berkarakter, berkompeten, dan berdaya saing.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 w-64 text-center">
          <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
            <Visibility />
          </div>
          <h3 className="text-xl font-semibold mb-2">Vision</h3>
          <p className="text-gray-600">Menjadi lembaga pendidikan yang unggul dalam ilmu pengetahuan, teknologi, dan seni serta menghasilkan lulusan yang kompeten dan berakhlak mulia.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-6 w-64 text-center">
          <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
            <Favorite />
          </div>
          <h3 className="text-xl font-semibold mb-2">Value</h3>
          <p className="text-gray-600">Integritas, Profesionalisme, Inovasi, Kepedulian, Kerja Sama, dan Kemandirian.</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-md p-6 w-64 text-center">
          <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
            <Flag />
          </div>
          <h3 className="text-xl font-semibold mb-2">Goals</h3>
          <p className="text-gray-600">Menciptakan lulusan yang mampu bersaing di tingkat nasional dan internasional serta berkontribusi dalam pembangunan bangsa.</p>
        </div>
      </div>
    </div>
  );
};

export default VisiMisi;
