import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardFooter } from '@material-tailwind/react';
import './QuotesCard.css'; // Import file CSS animasi

const QuotesCard = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch('http://192.168.100.2:1337/api/quotess');
        const data = await response.json();
        const quotesData = data.data.map(item => ({
          quote: item.attributes.Konten_Quotes,
          author: item.attributes.Penulis_Quotes,
          profilePic: 'https://via.placeholder.com/150', // URL gambar profil default
        }));
        setQuotes(quotesData);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };

    fetchQuotes();
  }, []);

  // Duplicate the quotes array to make the loop smoother
  const quotesDoubled = [...quotes, ...quotes];

  return (
    <div className="quotes-container">
      <div className="quotes-track">
        {quotesDoubled.map((item, index) => (
          <div className="quotes-slide" key={index}>
            <Card className="m-4 shadow-lg flex flex-col justify-between">
              <CardBody className="flex flex-col items-center">
                <img
                  src={item.profilePic}
                  alt={item.author}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <p className="text-gray-700 text-base text-center">{item.quote}</p>
              </CardBody>
              <CardFooter className="w-full text-center">
                <p className="text-gray-600 text-sm">- {item.author}</p>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuotesCard;
