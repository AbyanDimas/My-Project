// src/app/Components/DarkModeToggle/DarkModeToggle.tsx
import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {theme === "dark" ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default DarkModeToggle;
