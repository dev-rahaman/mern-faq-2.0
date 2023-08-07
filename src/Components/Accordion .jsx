import React, { useState } from "react";
import boottomArrow from "../../public/boottomArrow.svg";
import {} from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion w-[500px] border-b-[1px] border-[#7a899d] ">
      <div
        className="accordion-header hover:bg-purple-600 focus:bg-purple-600 transition-[0.5s] cursor-pointer p-3 relative dark:text-[#7a899d] hover:dark:bg-[#38bdf8] hover:dark:text-white dark:focus:bg-[#38bdf8] dark:focus:text-white"
        onClick={toggleFAQ}
        tabIndex="0"
      >
        <div className="flex justify-between">
          <h2>{title}</h2>
          <p className={`icon text-xs mr-0 ${isOpen ? "open" : ""}`}>
            {isOpen ? (
              <IoIosArrowUp className="text-[16px]" />
            ) : (
              <MdKeyboardArrowDown className="text-[20px]" />
            )}
          </p>
        </div>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p className="text-primary-color p-3 dark:text-[#7a899d]">
            {content}
          </p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
