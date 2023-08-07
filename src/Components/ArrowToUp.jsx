import React, { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

import { Link } from "react-router-dom";

const ArrowToUp = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 750) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-4 right-4 animate-bounce z-50 ${
        showButton ? "visible" : "invisible"
      }`}
    >
      <Link to={"/"}>
        <MdKeyboardDoubleArrowUp
          className="text-3xl dark:text-[#38bdf8] text-[#6d28d9] cursor-pointer"
          onClick={scrollToTop}
        />
      </Link>
    </button>
  );
};

export default ArrowToUp;
