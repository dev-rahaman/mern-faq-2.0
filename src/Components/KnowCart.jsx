import React from "react";

const KnowCart = ({
  knowCartImage,
  knowCartTitle,
  knowCartParagraph,
  knowCartLink,
}) => {
  return (
    <div className="text-center lg:w-[200px]   sm:w-[300px] rounded p-3 flex items-center justify-center flex-col m-3 border-b-2 border-e-2 cart-two">
      <div className="bg-[#ea580c] rounded-[50%]  w-12 p-2 flex items-center justify-center">
        <img src={knowCartImage} alt="" className="w-14" />
      </div>
      <div>
        <h3 className="font-medium my-2 text-[#464c5b]  dark:text-white">
          {knowCartTitle}
        </h3>
        <p className=" text-[#384559] my-3  dark:text-[#7a899d]">
          {knowCartParagraph}
        </p>
        <a
          href={knowCartLink}
          target="_blank"
          className="border-2 px-2 py-1 border-violet-600 rounded-[50px] text-[12px] text-[#7950f2] font-bold dark:text-[#38bdf8] dark:border-[#38bdf8]"
        >
          এখন থেকে শিখুন
        </a>
      </div>
    </div>
  );
};

export default KnowCart;
