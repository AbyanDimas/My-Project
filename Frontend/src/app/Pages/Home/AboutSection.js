import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from '@material-tailwind/react';

const AboutSection = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader className="bg-indigo-600 dark:bg-indigo-700 p-4">
              <Typography variant="h6" color="white" className="uppercase font-semibold">
                Tentang Kami
              </Typography>
            </CardHeader>
            <CardBody>
              <Typography variant="h3" className="font-extrabold tracking-tight text-gray-900 dark:text-white">
                SMK 1 Adiwerna Blog
              </Typography>
              <Typography variant="body1" className="mt-4 text-gray-500 dark:text-white">
                Our blog is dedicated to sharing the latest news, activities, and achievements of SMK 1 Adiwerna. Stay updated with our posts!
              </Typography>
            </CardBody>
          </Card>
          <Card className="bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader className="bg-indigo-600 dark:bg-indigo-700 p-4">
              <Typography variant="h6" color="white" className="uppercase font-semibold">
                Lokasi
              </Typography>
            </CardHeader>
            <CardBody>
              <Typography variant="h5" className="font-semibold text-gray-700 dark:text-white">
                SMK 1 Adiwerna
              </Typography>
              <Typography variant="body1" className="mt-2 text-gray-600 dark:text-white">
                Jalan Raya Adiwerna No. 100,
                <br />
                Adiwerna,
                <br />
                Kabupaten Tegal,
                <br />
                Jawa Tengah, Indonesia
              </Typography>
              <div className="mt-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg overflow-hidden">
                <iframe
                  className="w-full h-64"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.1013087099654!2d109.12598251432799!3d-7.002391570779753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb9fbd5c682f9%3A0x8bc88c72d14eb7d4!2sSMK%20Negeri%201%20Adiwerna!5e0!3m2!1sen!2sid!4v1625503008123!5m2!1sen!2sid"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
