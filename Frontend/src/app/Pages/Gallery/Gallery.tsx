import React from 'react';
import School from '@mui/icons-material/School';
import Event from '@mui/icons-material/Event';
import Group from '@mui/icons-material/Group';
import EmojiEvents from '@mui/icons-material/EmojiEvents';
import EventRepeat from '@mui/icons-material/EventRepeat';
import People from '@mui/icons-material/People';

const albums = [
  { title: 'Upacara', icon: <School className="text-5xl text-blue-500 mr-4" /> },
  { title: 'Kegiatan Sekolah', icon: <Event className="text-5xl text-blue-500 mr-4" /> },
  { title: 'MPLS', icon: <Group className="text-5xl text-blue-500 mr-4" /> },
  { title: 'Kejuaraan', icon: <EmojiEvents className="text-5xl text-blue-500 mr-4" /> },
  { title: 'Upacara Rutin', icon: <EventRepeat className="text-5xl text-blue-500 mr-4" /> },
  { title: 'Organisasi', icon: <People className="text-5xl text-blue-500 mr-4" /> },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Gallery Kegiatan Sekolah</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {albums.map((album) => (
          <div key={album.title} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6 flex items-center">
              {album.icon}
              <h2 className="text-xl font-semibold">{album.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
