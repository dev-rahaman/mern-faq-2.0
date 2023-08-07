import React, { useState } from "react";
import login from "../../public/login.webp";
import access from "../../public/access.gif";

const ForgetPass = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
  };

  return (
    <div className="lg:flex justify-center items-center  lg:h-screen dark:bg-[#0b1324]">
      <form className="px-8 pt-6 pb-8" onSubmit={handleSubmit}>
        <h1 className="text-black dark:text-white mt-16 text-center ">
          <span className="primary-highlighter dark:text-[#38bdf8]">
            {" "}
            পাসওয়ার্ড{" "}
          </span>
          ভুলে গেছেন?
        </h1>
        <p className="text-[#515d6f] text-center font-bold !text-sm dark:text-[#7a899d]">
          আপনার ইমেইল এড্রেস দিয়ে রিসেট করে নিন
        </p>
        <div className="my-10 lg:w-[500px]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 dark:text-[#7a899d] "
            htmlFor="email"
          >
            আপনার ইমেইল এড্রেস <span className="text-red-600">*</span>
          </label>
          <span className="text-[10px] text-[#515d6f] font-bold dark:text-[#7a899d] block mb-2">
            যে ইমেইল এড্রেস দিয়ে আপনি নিবন্ধন করেছিলেন।
          </span>
          <input
            className="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight dark:bg-[#1c2b4b] outline border-none dark:focus:outline-[#38bdf8]  outline-[1px]"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-purple-600 dark:bg-[#38bdf8] text-white font-bold py-2 px-4 rounded login-button"
            type="submit"
          >
            ভেরিফিকেশন পাঠান
          </button>
        </div>
      </form>
      <div className="lg:pt-32">
        <img src={access} alt="login" />
      </div>
    </div>
  );
};

export default ForgetPass;
