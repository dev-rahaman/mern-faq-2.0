import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  const handleDownload = () => {
    window.open("/path/to/your/book.pdf", "_blank");
  };
  return (
    <div>
      <h1>payment success </h1>

      <div className="mt-14">
        <Link
          to={user ? "/checkout" : "/login"}
          onClick={handleDownload}
          className="text-center mt-10 cursor-pointer w-1/2 bg-purple-600 dark:bg-[#38bdf8] text-white font-bold py-2 px-4 rounded login-button"
        >
          বইটি ডাউনলোড করুন{" "}
        </Link>
      </div>
    </div>
  );
};

export default Success;
