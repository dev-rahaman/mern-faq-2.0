import React from "react";

const Center = ({ topImg, firstText, heading, secondText, title }) => {
  return (
    <div className="lg:w-full w-80 m-auto flex items-center justify-center flex-col mt-[100px] mb-9">
      <div data-aos="fade-up">
        <img src={topImg} alt="" className="w-24"></img>
      </div>
      <div>
        <h1 className="section-title text-center dark:text-white">
          {firstText}{" "}
          <span className="primary-highlighter dark:text-[#38bdf8]">
            {heading}{" "}
          </span>
          {secondText}
        </h1>
        <p className="text-[#515d6f] text-center font-bold !text-sm dark:text-[#7a899d]">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Center;
