import React from 'react';
import HeroSection from './Home/HeroSection';
import AboutSection from './Home/AboutSection';
import CategoriesSection from './Home/CategoriesSection';
import FeaturedPostsSection from './Home/FeaturedPostsSection';
import Footer from './Home/Footer';
import Quotes from './Home/Quotes';
import VisiMisi from './Home/VisiMisi';
import Jurusan from './Home/Jurusan';
import LayananSekolah from './Home/LayananSekolah';
import Layout from './Home/BannerProfileCard';
import SchoolStatsWidget from './Home/SchoolStatsWidget';
import WidgetBlogs from './Home/WidgetBlogs';

export default function Home() {
  return (
    <div className="bg-gray-100">
      <HeroSection />
      <AboutSection />
      <FeaturedPostsSection />
      <VisiMisi /> 
      <Layout />
      <WidgetBlogs />
      <SchoolStatsWidget />
      <LayananSekolah />
      <Jurusan />
      <CategoriesSection />
      <Quotes />
      <Footer />
    </div>
  );
}
