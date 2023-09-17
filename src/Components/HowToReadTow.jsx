import React from "react";

const HowToReadTow = ({
  rightImage,
  readNumber,
  readTitle,
  readDescription,
  arrowImage,
}) => {
  return (
    <div>
      <div className="lg:flex gap-2 items-center justify-center my-32">
        <div data-aos="fade-left">
          <img src={rightImage} alt="" className="w-[1700px] p-10 " />
        </div>
        <div className="w-100 p-10 h-[300px] ">
          <div data-aos="fade-right">
            <h1 class="bg-red-500 w-100 text-center text-white custom-shape">
              {readNumber}
            </h1>
            <div className="ms-24 -mt-3">
              <span class="relative flex h-6 w-6">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-6 w-6 bg-sky-500"></span>
              </span>
            </div>
          </div>
          <h1 className="lg:text-3xl text-2xl py-4 font-bold dark:text-white">
            {readTitle}
          </h1>
          <p className="text-primary-color dark:text-[#7a899d]">
            {readDescription}
          </p>
        </div>
      </div>

      <div className="lg:flex items-center justify-center hidden transform scale-x-[-1]">
        <img src={arrowImage} alt="" className="-mb-24 mt-5 w-1/2" />
      </div>
    </div>
  );
};

export default HowToReadTow;
