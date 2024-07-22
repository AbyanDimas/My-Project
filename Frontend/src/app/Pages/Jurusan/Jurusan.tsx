import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Jurusan() {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);
  const [cards, setCards] = useState<any[]>([]);
  const navigate = useNavigate();

  const handleReadMoreClick = (index: number) => {
    if (expandedIndices.includes(index)) {
      setExpandedIndices(expandedIndices.filter(i => i !== index));
    } else {
      setExpandedIndices([...expandedIndices, index]);
    }
  };

  const handleTitleClick = (id: number) => {
    navigate(`/jurusan/${id}`);
  };

  useEffect(() => {
    fetch('http://192.168.100.2:1337/api/jurusans')
      .then(response => response.json())
      .then(data => {
        const cardsData = data.data.map((item: any) => ({
          id: item.id,
          title: item.attributes.Judul_Jurusan,
          description: item.attributes.Deskripsi_Jurusan,
          img: 'https://t4.ftcdn.net/jpg/02/97/01/65/360_F_297016511_NWrJG1s3mpyjqD3hwdKidfYsvhEnrPm4.jpg',
        }));
        setCards(cardsData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto p-4 dark:text-gray-300 dark:bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        {cards.slice(0, 4).map((card, index) => (
          <div
            key={card.id}
            className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl dark:bg-gray-800 dark:text-gray-300"
          >
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img src={card.img} alt="card-image" className="object-cover w-full h-full" />
            </div>
            <div className="p-6">
              <h5 
                className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 cursor-pointer dark:text-gray-200"
                onClick={() => handleTitleClick(card.id)}
              >
                {card.title}
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit dark:text-gray-400">
                {expandedIndices.includes(index) ? card.description : `${card.description.substring(0, 100)}...`}
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none dark:bg-gray-700 dark:hover:bg-gray-600"
                type="button"
                onClick={() => handleReadMoreClick(index)}
              >
                {expandedIndices.includes(index) ? 'Show less' : 'Read More'}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {cards.slice(4).map((card, index) => (
          <div
            key={card.id}
            className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl dark:bg-gray-800 dark:text-gray-300"
          >
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img src={card.img} alt="card-image" className="object-cover w-full h-full" />
            </div>
            <div className="p-6">
              <h5 
                className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 cursor-pointer dark:text-gray-200"
                onClick={() => handleTitleClick(card.id)}
              >
                {card.title}
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit dark:text-gray-400">
                {expandedIndices.includes(index + 4) ? card.description : `${card.description.substring(0, 100)}...`}
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none dark:bg-gray-700 dark:hover:bg-gray-600"
                type="button"
                onClick={() => handleReadMoreClick(index + 4)}
              >
                {expandedIndices.includes(index + 4) ? 'Show less' : 'Read More'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
