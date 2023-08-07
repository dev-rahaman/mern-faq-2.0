import React, { useContext, useState } from "react";
import login from "../../public/login.webp";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser, googleSignIn, gitHubSignIn, loginUser } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    email;
    password;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(error.message);
      });
  };

  const handleGitHubSing = () => {
    gitHubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="lg:flex justify-center items-center lg:h-screen dark:bg-[#0b1324]">
      <form className="px-8 pt-6 pb-8" onSubmit={handleSubmit}>
        <h1 className="text-black dark:text-white mt-16 text-center ">
          একাউন্ট
          <span className="primary-highlighter dark:text-[#38bdf8]">
            {" "}
            তৈরী{" "}
          </span>
          করুন
        </h1>
        <p className="text-[#515d6f] text-center font-bold !text-sm dark:text-[#7a899d]">
          আপনার একাউন্ট তৈরীর তথ্য কারো সাথে শেয়ার করবেন না
        </p>
        <div className="my-10 lg:w-[500px]">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 dark:text-[#7a899d] "
            htmlFor="email"
          >
            আপনার ইমেইল এড্রেস <span className="text-red-600">*</span>
          </label>
          <span className="text-[10px] text-[#515d6f] font-bold dark:text-[#7a899d] block mb-2">
            আপনার প্রফেশনাল ইমেইল এড্রেস দিয়ে আপনি নিবন্ধন করুন
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
        <div className="mb-6">
          <label
            className="block text-[#515d6f]  dark:text-[#7a899d]  text-sm font-bold mb-2"
            htmlFor="password"
          >
            পাসওয়ার্ড দিন <span className="text-red-600">*</span>
          </label>
          <span className="text-[10px] text-[#515d6f] lg:text-center font-bold dark:text-[#7a899d] block mb-2">
            পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে এবং সেখানে কমপক্ষে 1 টি লেটার
            এবং 1 টি নাম্বার থাকতেই হবে।
          </span>
          <input
            className="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight dark:bg-[#1c2b4b] outline border-none dark:focus:outline-[#38bdf8]  outline-[1px]"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <p className="text-red-600 mb-5">{error}</p>
        <div className="flex items-center justify-between">
          <button
            className="bg-purple-600 dark:bg-[#38bdf8] text-white font-bold py-2 px-4 rounded login-button"
            type="submit"
          >
            একাউন্ট তৈরী করুন
          </button>
          <a
            href="/login"
            className="text-purple-600 dark:text-[#38bdf8] text-[12px]"
          >
            লগইন করুন
          </a>
        </div>
        <div className="inline-block mt-5">
          <button
            className="bg-purple-600 dark:bg-[#38bdf8] text-white font-bold py-2 px-4 rounded login-button me-5"
            onClick={handleGoogleSignIn}
          >
            গুগল দিয়ে সাইন ইন
          </button>
        </div>
        <button
          className="bg-purple-600 dark:bg-[#38bdf8] text-white font-bold py-2 px-4 rounded login-button"
          onClick={handleGitHubSing}
        >
          গিটহাব দিয়ে সাইন ইন
        </button>
      </form>
      <div className="lg:pt-32">
        <img src={login} alt="login" />
      </div>
    </div>
  );
};

export default Registration;
