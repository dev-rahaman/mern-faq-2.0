import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Theme = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const handleThemeSwitch = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className="flex justify-center items-center transition-all ">
      <button
        onClick={handleThemeSwitch}
        className="text-gray-700 dark:text-[#38bdf8] px-3 py-2 rounded-md text-sm font-medium"
      >
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default Theme;
