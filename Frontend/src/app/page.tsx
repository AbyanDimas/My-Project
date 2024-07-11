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
import StatusPage from "./Components/Popups/StatusPage"; // Import StatusPage
import Loading from "./Components/Other/Loading"; // Import Loading component
import Error from "./Components/Other/Error"; // Import Error component
import NotFound from "./Components/Other/NotFound"; // Import NotFound component

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
            <Route path="/articles/:id" element={<ArticleDetails />} />
            <Route path="/status" element={<StatusPage />} /> {/* Add StatusPage route */}
            <Route path="*" element={<NotFound />} /> {/* Add NotFound route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}
