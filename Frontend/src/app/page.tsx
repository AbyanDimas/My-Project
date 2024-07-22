"use client";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useFetchData from "./api"; // Import the API logic
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Forms from "./Pages/Forms";
import Gallery from "./Pages/Gallery/Gallery";
import Blogs from "./Pages/Blogs";
import ArticleDetails from "./Pages/ArticleDetails";
import Jurusan from "./Pages/Jurusan/Jurusan";
import JurusanDetail from './Pages/Jurusan/JurusanDetail';
import StatusPage from "./Components/Popups/StatusPage";
import FasilitasPage from "./Pages/Fasilitas/Fasilitas"; 
import Profil from "./Pages/Profil/Profil";
import Loading from "./Components/Other/Loading"; 
import Error from "./Components/Other/Error"; 
import NotFound from "./Components/Other/NotFound";

export default function App() {
  let { loading, data, error } = useFetchData();
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setIsContentVisible(true);
      }, 300);
    }
  }, [loading]);

  if (loading) return <Loading />; 
  if (error) return <Error />; 

  return (
    <Router>
      <div>
        <Navbar />
        <div className={`pt-16 transition-opacity duration-1000 ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/fasilitas" element={<FasilitasPage />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/Jurusan" element={<Jurusan />} />
            <Route path="/jurusan/:id" element={<JurusanDetail />} />
            <Route path="/articles/:id" element={<ArticleDetails />} />
            <Route path="/status" element={<StatusPage />} /> 
            <Route path="*" element={<NotFound />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}
