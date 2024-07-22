import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [language, setLanguage] = useState('en');
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const welcomeMessages = {
    en: 'Welcome to',
    id: 'Selamat datang di',
    es: 'Bienvenido a',
    fr: 'Bienvenue à',
    de: 'Willkommen bei',
  };

  const messages = Object.values(welcomeMessages);

  useEffect(() => {
    const handleType = () => {
      const currentMessage = messages[loopNum % messages.length];
      const updatedText = isDeleting
        ? currentMessage.substring(0, displayedText.length - 1)
        : currentMessage.substring(0, displayedText.length + 1);

      setDisplayedText(updatedText);

      if (!isDeleting && updatedText === currentMessage) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      setTypingSpeed(isDeleting ? 50 : 150);
    };

    const timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, typingSpeed, loopNum, messages]);

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="relative">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://smkn1adw.sch.id/fp/sites/default/files/SLIDE%201.jpg"
          alt="SMK 1 Adiwerna"
        />
        <div className="relative z-10 bg-opacity-75 bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
              <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span className="block xl:inline" style={{ minHeight: '24px' }}>
                      {displayedText}
                    </span>{' '}
                    <span className="block text-indigo-600 xl:inline">SMK 1 Adiwerna</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Explore our blog to learn more about our activities, achievements, and updates.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      >
                        Get Started
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
