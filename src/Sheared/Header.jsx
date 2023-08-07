import React, { useContext, useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoBookSharp } from "react-icons/io5";
import Theme from "../Components/Theme";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const dropdownRef = useRef(null);
  const { user, logOut } = useContext(AuthContext);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdown(false);
    }
  };

  const handleHamburger = () => {
    setHamburger(!hamburger);
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then(() => {});
  };

  return (
    <nav className="navbar bg-[#f9fafc] dark:bg-gray-800 border-b-[1px] dark:border-gray-500 fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to={"/"}>
              <IoBookSharp
                className="text-6xl text-[#6d28d9] dark:text-[#38bdf8] cursor-pointer"
                onClick={scrollToTop}
              />
            </Link>
          </div>

          <div className="flex sm:hidden">
            <button
              onClick={handleHamburger}
              type="button"
              className="text-gray-700 dark:text-[#38bdf8] focus:outline-none px-3 py-2 rounded-md text-sm font-medium"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="hidden sm:flex sm:items-center">
            <Link
              to="/"
              onClick={scrollToTop}
              className="text-gray-700 hover:text-white dark:text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              হোম
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={handleDropdown}
                className="text-gray-700 hover:text-white dark:text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                বইয়ের বিস্তারিত <FiChevronDown className="inline-block" />
              </button>
              {dropdown && (
                <div className="absolute right-0 mt-4 w-[380px] p-3 bg-white dark:bg-[#1c2b4b]  rounded-md shadow-lg">
                  <div
                    className="py-1 flex"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <div>
                      <a
                        href="#story"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-[#38bdf8]    hover:hover:scale-105 hover:transition-transform duration-500"
                        role="menuitem"
                      >
                        <span>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            class="!text-violet-500 inline-block"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                            <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 10h9v2H5zm0-3h9v2H5z"></path>
                          </svg>
                        </span>
                        বই ফিচার্স
                      </a>
                      <a
                        href="#module"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-[#38bdf8] hover:hover:scale-105 hover:transition-transform duration-500"
                        role="menuitem"
                      >
                        <span>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 16 16"
                            class="!text-yellow-400 inline-block"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2 11h1V6.99H2V11zm1-5.01V5.5l.5-.5h4.43l.43.25.43.75h5.71l.5.5v8l-.5.5h-11l-.5-.5V12H1.5l-.5-.5v-9l.5-.5h4.42l.44.25.43.75h5.71l.5.5V6l-1-.03V4H6.5l-.43-.25L5.64 3H2v2.99h1zm5.07.76L7.64 6H4v3h3.15l.41-.74L8 8h6V7H8.5l-.43-.25zM7.45 10H4v4h10V9H8.3l-.41.74-.44.26z"
                            ></path>
                          </svg>
                        </span>{" "}
                        বিষয়সমূহ
                      </a>
                      <a
                        href="#whatGet"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-[#38bdf8] hover:hover:scale-105 hover:transition-transform duration-500"
                        role="menuitem"
                      >
                        <span>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            version="1.1"
                            viewBox="0 0 16 16"
                            class="!text-yellow-500 inline-block"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5.016 16c-1.066-2.219-0.498-3.49 0.321-4.688 0.897-1.312 1.129-2.61 1.129-2.61s0.706 0.917 0.423 2.352c1.246-1.387 1.482-3.598 1.293-4.445 2.817 1.969 4.021 6.232 2.399 9.392 8.631-4.883 2.147-12.19 1.018-13.013 0.376 0.823 0.448 2.216-0.313 2.893-1.287-4.879-4.468-5.879-4.468-5.879 0.376 2.516-1.364 5.268-3.042 7.324-0.059-1.003-0.122-1.696-0.649-2.656-0.118 1.823-1.511 3.309-1.889 5.135-0.511 2.473 0.383 4.284 3.777 6.197z"></path>
                          </svg>
                        </span>{" "}
                        কেন কিনবেন?
                      </a>
                      <a
                        href="#howDosesWork"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-[#38bdf8] hover:hover:scale-105 hover:transition-transform duration-500"
                        role="menuitem"
                      >
                        <span>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            class="!text-purple-400 inline-block"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path d="M9.83 8.79L8 9.456V13H6V8.05h.015l5.268-1.918c.244-.093.51-.14.782-.131a2.616 2.616 0 0 1 2.427 1.82c.186.583.356.977.51 1.182A4.992 4.992 0 0 0 19 11v2a6.986 6.986 0 0 1-5.402-2.547l-.581 3.297L15 15.67V23h-2v-5.986l-2.05-1.987-.947 4.298-6.894-1.215.348-1.97 4.924.868L9.83 8.79zM13.5 5.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                            </g>
                          </svg>
                        </span>{" "}
                        কিভাবে পড়বে?
                      </a>
                    </div>
                    <div>
                      <a
                        href="#support"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-[#38bdf8] hover:hover:scale-105 hover:transition-transform duration-500"
                        role="menuitem"
                      >
                        <span>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            version="1"
                            viewBox="0 0 48 48"
                            enable-background="new 0 0 48 48"
                            class="!text-teal-800 inline-block"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="#FFB74D"
                              d="M29,43v-4.6l2.6,0.5c2.9,0.6,5.6-1.5,5.8-4.4L38,28l2.9-1.2c1-0.4,1.4-1.6,0.8-2.6L38,18 c-0.6-7.6-4.9-15-16-15C10.6,3,5,11.4,5,20c0,3.7,1.3,6.9,3.3,9.6c1.8,2.5,2.7,5.5,2.7,8.5l0,4.8H29z"
                            ></path>
                            <polygon
                              fill="#FF9800"
                              points="29,43 29,38.4 22,37 22,43"
                            ></polygon>
                            <circle
                              fill="#784719"
                              cx="33.5"
                              cy="21.5"
                              r="1.5"
                            ></circle>
                            <path
                              fill="#FF5722"
                              d="M21.4,3C12.3,3,5,10.3,5,19.4c0,11.1,6,11.4,6,18.6l2.6-0.9c2.1-0.7,3.9-2.3,4.7-4.4l2.8-6.8L27,23v-6 c0,0,7-3.8,7-10.3C31,4.2,25.7,3,21.4,3z"
                            ></path>
                            <g fill="#546E7A">
                              <path d="M21,2.1c-0.6,0-1,0.4-1,1v13.9c0,0.6,0.4,1,1,1s1-0.4,1-1V3.1C22,2.5,21.6,2.1,21,2.1z"></path>
                              <path d="M36.9,31.9c-7.9,0-10.3-4.9-10.4-5.1c-0.2-0.5-0.8-0.7-1.3-0.5c-0.5,0.2-0.7,0.8-0.5,1.3 c0.1,0.3,3,6.3,12.2,6.3c0.6,0,1-0.4,1-1S37.4,31.9,36.9,31.9z"></path>
                            </g>
                            <circle
                              fill="#37474F"
                              cx="37"
                              cy="33"
                              r="2"
                            ></circle>
                            <circle
                              fill="#37474F"
                              cx="21"
                              cy="23"
                              r="7"
                            ></circle>
                            <circle
                              fill="#546E7A"
                              cx="21"
                              cy="23"
                              r="4"
                            ></circle>
                          </svg>
                        </span>{" "}
                        সাপোর্ট
                      </a>
                      <a
                        href="#whatKnow"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-[#38bdf8] hover:hover:scale-105 hover:transition-transform duration-500"
                        role="menuitem"
                      >
                        <span>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 512 512"
                            class="!text-sky-600 inline-block"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M119.1 25v.1c-25 3.2-47.1 32-47.1 68.8 0 20.4 7.1 38.4 17.5 50.9L99.7 157 84 159.9c-13.7 2.6-23.8 9.9-32.2 21.5-8.5 11.5-14.9 27.5-19.4 45.8-8.2 33.6-9.9 74.7-10.1 110.5h44l11.9 158.4h96.3L185 337.7h41.9c0-36.2-.3-77.8-7.8-111.7-4-18.5-10.2-34.4-18.7-45.9-8.6-11.4-19.2-18.7-34.5-21l-16-2.5L160 144c10-12.5 16.7-30.2 16.7-50.1 0-39.2-24.8-68.8-52.4-68.8-2.9 0-4.7-.1-5.2-.1zM440 33c-17.2 0-31 13.77-31 31s13.8 31 31 31 31-13.77 31-31-13.8-31-31-31zM311 55v48H208v18h103v158h-55v18h55v110H208v18h103v32h80.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V297h62.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V73h62.8c-.5-2.92-.8-5.93-.8-9 0-3.07.3-6.08.8-9H311zm129 202c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31zm0 160c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31z"></path>
                          </svg>
                        </span>{" "}
                        যা জানতে হবে
                      </a>
                      <a
                        href="#FAQ"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-[#38bdf8] hover:hover:scale-105 hover:transition-transform duration-500"
                        role="menuitem"
                      >
                        <span>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            class="!text-green-500 inline-block"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                            <path d="M11 23.59v-3.6c-5.01-.26-9-4.42-9-9.49C2 5.26 6.26 1 11.5 1S21 5.26 21 10.5c0 4.95-3.44 9.93-8.57 12.4l-1.43.69zM11.5 3C7.36 3 4 6.36 4 10.5S7.36 18 11.5 18H13v2.3c3.64-2.3 6-6.08 6-9.8C19 6.36 15.64 3 11.5 3zm-1 11.5h2v2h-2zm2-1.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z"></path>
                          </svg>
                        </span>{" "}
                        সাধারণ প্রশ্নের উত্তর
                      </a>
                      <a
                        href="#writer"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-[#38bdf8] hover:hover:scale-105 hover:transition-transform duration-500"
                        role="menuitem"
                      >
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            shape-rendering="geometricPrecision"
                            text-rendering="geometricPrecision"
                            image-rendering="optimizeQuality"
                            fill-rule="evenodd"
                            className="inline-block me-2"
                            clip-rule="evenodd"
                            viewBox="0 0 512 463.29"
                          >
                            <path d="M118.75 258.77c19.44-4.34 21.73-5.29 33.61-11.1 29.54 56.82 124.02 55.53 141.37-.05 10.02 5.09 13.51 6.47 25.32 9.22-.72 3.06-1.24 6.21-1.52 9.45l-14.34-4.92 11.65 31.79-5.29 6.58c-13.92 1.16-26.54 2.92-33.96 5.3-17.94 5.76-33.38 15.22-43.42 28.78v113.92c40.43-22.79 91.17-31.24 137.85-28.02V323.7l24.59-6.22v-9.84c6.2-1.64 12.1-3.53 17.68-5.68 1.06-.4 2.1-.81 3.13-1.24 16.11 16.83 31.25 39.57 30.54 61.75-.44 13.78-24.06 26.01-60.2 35.11.37 16.13.64 32.27.64 48.44-60.59-11.99-88.19-8.3-136 8.46-34.07 11.96-20.92 11.64-55.23-.31-47.82-16.67-75.33-20.1-135.59-8.05 0-20.01.38-36.26.92-50.8C23.85 386.04 0 374.33 0 362.44c0-12.55 4.41-25.17 11.13-36.8 9.42-16.32 23.4-30.75 36.08-40.43 18.57-14.2 40.53-19.52 71.54-26.44zm216.97 52.91c-1.71 5.56-3.72 11.04-5.64 16.49 12.88-.1 31.58-56.54 45.09-76.97 17.82-26.94 37.84-48.9 64.37-67.31 14.13-9.8 32.37-20.78 49.32-24.67 4.63-1.06 9.38-1.68 14.27-1.7-52.04 16.96-91.57 48.94-121.37 94.23-12.16 18.46-22.36 38.68-31.5 59.85l20.54 1.86-8.79-3.42 29.66-7.51c-11.52-2.94-22.43-.62-26.37-4.55 30.85-4.2 55.7-13.18 72.4-27.78-6.74-.33-14.48-.47-18.65-2.03 29.03-12.82 44.69-32.58 65.21-50.71-28.01 8.58-54.51 9.97-62.65 5.24 50.72-.82 82.01-17.67 89.99-53.8.62-3.88.55-7.73-.41-11.53-6.19-24.74-51.38-29.21-63.98-7.31-2.51 4.38-6.25 8.51-9.2 13.59l11.43-27.06c-35.9 15.85-37.7 29.93-53.11 73.2.37-12.78 2.85-24.55 6.43-35.78-44.65 22.03-56.01 68.38-55.03 106.84-2.53-13.22-1.58-30.2 1.48-49.46-12.28 14.76-20.04 31.48-14.71 53.87l-6.44-2.21 4.35 11.89-9.64-3.55 12.95 20.29zM213.76 446.26V333.59c-9.64-14.42-25.23-24.06-42.84-29.78-19.97-6.49-74.37-7.94-93.94-5.59l-1.02 121.97c43.58-1.33 99.84 2.62 137.8 26.07zm99.7-274.14V140.4c1.46-6.13 3.5-6.73 6.53-7.31 8.21-1.26 7.26 36.93-6.53 39.03zm-67.43-31.6c-1.74.69-3.62-.39-4.26-2.32-.6-1.98.34-4.16 2.08-4.81 13.38-5.19 22.93-4.85 36.36 0 1.73.65 2.72 2.77 2.18 4.75-.55 1.99-2.43 3.07-4.16 2.48-2.23-.78-4.46-1.48-6.69-1.97.24.78.35 1.63.35 2.52 0 12.31-18.72 12.28-18.72 0 0-1.29.24-2.48.69-3.56-3.96.39-3.87 1.39-7.83 2.91zm-76.72 0c-1.74.69-3.62-.39-4.26-2.32-.6-1.98.34-4.16 2.08-4.81 13.38-5.19 22.93-4.85 36.36 0 1.73.65 2.72 2.77 2.18 4.75-.55 1.99-2.43 3.07-4.16 2.48-2.23-.78-4.46-1.48-6.69-1.97.24.78.35 1.63.35 2.52 0 12.31-18.73 12.28-18.73 0 0-1.29.25-2.48.7-3.56-3.96.39-3.87 1.39-7.83 2.91zm42.48 37.63a3.984 3.984 0 0 1-.5-5.62 3.987 3.987 0 0 1 5.63-.5c2.01 1.69 3.93 2.56 5.76 2.56 1.83.04 3.85-.82 6-2.61 1.69-1.42 4.2-1.15 5.62.55 1.42 1.69 1.14 4.21-.55 5.62-3.66 3.02-7.41 4.49-11.16 4.39-3.79-.05-7.37-1.55-10.8-4.39zM252.63 204c-3.23 1.1-6.55 2.02-9.99 2.77-3.52.97-6.77 1.57-9.64 1.64-3.3.06-6.11-.56-8.37-2.05-.68-.45-1.3-.94-1.84-1.46-.54.52-1.16 1.01-1.84 1.46-2.26 1.51-5.08 2.11-8.36 2.05-2.88-.07-6.13-.65-9.65-1.64a92.39 92.39 0 0 1-9.99-2.77 96.062 96.062 0 0 1-9.43-3.78c-1.48-.69-2.08-2.34-1.33-3.72.45-.81 1.27-1.33 2.17-1.47 1.63-.27 2.94-.44 4.17-.61l.1-.02c3.96-.54 6.98-.97 10.7-2.45 1.06-.41 2.06-.88 3.09-1.35 5.91-2.74 12.38-5.72 18.84-.6.56.45 1.08.89 1.53 1.39.45-.5.96-.94 1.52-1.39 6.45-5.14 12.94-2.15 18.85.6 1.03.47 2.04.94 3.09 1.35 3.69 1.48 6.74 1.91 10.7 2.45l.1.02c1.22.17 2.53.34 4.17.61.9.14 1.74.66 2.17 1.47.75 1.36.15 3.03-1.33 3.72a91.338 91.338 0 0 1-9.43 3.78zM113.37 59.75c2.91-24.27 14.22-34.01 32.78-31.21C163.8 10.09 188.72-.22 223.04.05c38.19-.78 70.79 8.16 94.45 32.4 12.43 12.38 17.75 25.31 14.53 52.58.49 19.95 6.46 28.58-11.15 39.65 4.83-.34 8.2 2.65 10.23 7.75 1 2.57 1.65 5.67 1.92 9.09.23 3.18.2 6.71-.23 10.27-1.42 13-7.4 26.55-18.44 28.15-.51.08-.96.08-1.43.04v1.88c2.4 59.35-82.23 112-138.81 65.15-17.26-14.33-36.05-32.07-40.81-54.72-.07-.39-.11-.8-.11-1.19v-11.12c-.57.11-1.18.11-1.8 0-11.09-1.61-17.03-15.19-18.45-28.15-.38-3.56-.45-7.09-.22-10.28.27-3.41.92-6.55 1.91-9.08 2.19-5.56 6.02-8.63 11.51-7.59 2.64.49 5.06 1.84 7.05 4.13v-4.52c-6.46-3.64-5.35-5.72-4.87-13.65-12.73-21.22-14.95-27.54-14.95-51.09zm187.6 59.22c-5.29-14.8-12.28-16.49-25.01-24.28-10.7-4.64-20.06-8.55-28.96-11.35-21.54-4.8-45.24-3.42-64.83 3.15-5.23 2.02-10.75 4.52-16.68 7.47-12.51 7.32-18.3 8.02-20.95 20.52v76.62c4.45 21.36 4.14 17.37 17.83 30.76l23.74 23.24c4.29 3.52 9.13 5.59 14.26 6.83 17.56 4.13 54.5 2.48 68.34-12.09 20.64-20.05 33.64-26.12 32.18-58.17v-62.7h.08zM203.33 221.4c-1.73-.93-2.38-3.07-1.45-4.76.91-1.72 3.06-2.37 4.74-1.45 5.45 2.87 10.78 4.33 16.04 4.37 5.25 0 10.5-1.42 15.79-4.33 1.73-.92 3.84-.31 4.8 1.37.92 1.69.3 3.84-1.38 4.8-6.33 3.49-12.7 5.21-19.18 5.17-6.52-.03-12.95-1.76-19.36-5.17zm-71.18-49.28V140.4c-1.45-6.13-3.2-6.42-6.22-7-8.17-1.26-8.01 35.65 6.22 38.72z"></path>
                          </svg>
                        </span>
                        লেখক
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to={user ? "/checkout" : "/login"}
              className="text-gray-700 hover:text-white dark:text-gray-300 hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium"
            >
              এখনই কিনুন
            </Link>

            <a
              href="#module"
              className="text-gray-700 hover:text-white dark:text-gray-300 hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium"
            >
              বিষয়সমূহ
            </a>
            {user ? (
              <button
                onClick={handleLogOut}
                className="text-gray-700 hover:text-white dark:text-gray-300 hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium"
              >
                লগ আউট করুন
              </button>
            ) : (
              <Link
                to="/login"
                className="text-gray-700 hover:text-white dark:text-gray-300 hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium"
              >
                লগইন
              </Link>
            )}
            <Theme></Theme>
          </div>
        </div>
      </div>

      <div className="lg:hidden md:hidden sm:hidden absolute top-5 left-3/4">
        <Theme></Theme>
      </div>
      {/* Responsive Hamburger Menu */}
      {hamburger && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/"
              onClick={scrollToTop}
              className="text-gray-700 dark:text-[#38bdf8] hover:text-white  hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              হোম
            </a>
            <a
              href="#story"
              className="text-gray-700 dark:text-[#38bdf8] hover:text-white  hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              বই ফিচার্স
            </a>
            <a
              href="#module"
              className="text-gray-700 dark:text-[#38bdf8] hover:text-white   hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              বিষয়সমূহ
            </a>
            <a
              href="#whatGet"
              className="text-gray-700 dark:text-[#38bdf8] hover:text-white   hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              কেন কিনবেন?
            </a>
            <a
              href="#whatKnow"
              className="text-gray-700 dark:text-[#38bdf8] hover:text-white   hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              যা জানতে হবে
            </a>

            <Link
              to={user ? "/checkout" : "/login"}
              className="text-gray-700 dark:text-[#38bdf8] hover:text-white   hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              এখনই কিনুন
            </Link>

            <a
              href="#howDosesWork"
              className="text-gray-700 dark:text-[#38bdf8] hover:text-white   hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              কিভাবে পড়বে?
            </a>
            <a
              href="#support"
              className="text-gray-700 dark:text-[#38bdf8] hover:bg-gray-700 hover:text-white     block px-3 py-2 rounded-md text-base font-medium"
            >
              সাপোর্ট
            </a>
            <a
              href="#FAQ"
              className="text-gray-700 dark:text-[#38bdf8] hover:bg-gray-700   hover:text-white   block px-3 py-2 rounded-md text-base font-medium"
            >
              সাধারণ প্রশ্নের উত্তর
            </a>
            <a
              href="#writer"
              className="text-gray-700 dark:text-[#38bdf8] hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              লেখক
            </a>
            <Link
              to="/login"
              className="text-gray-700 dark:text-[#38bdf8] hover:bg-gray-700  hover:text-white  block px-3 py-2 rounded-md text-base font-medium"
            >
              লগইন
            </Link>
          </div>{" "}
        </div>
      )}
    </nav>
  );
};

export default Header;
