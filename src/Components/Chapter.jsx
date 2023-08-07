import React from "react";

const Chapter = ({
  ChapterNumber,
  ChapterTitle,
  ChapterHours,
  buttonOne,
  buttonTwo,
}) => {
  return (
    <div>
      <h2 className="font-bold text-primary-color dark:text-[#7a899d]">
        {ChapterNumber}
      </h2>
      <p className="text-xs text-primary-color dark:text-[#7a899d]">
        {ChapterTitle}
      </p>
      <div className="flex lg:gap-4 gap-2 my-2">
        <p className="border-2 px-2 py-1 border-violet-600 rounded-[50px] text-[12px] text-[#7950f2] font-bold  dark:border-[#38bdf8] dark:text-[#38bdf8]">
          {buttonOne}
        </p>

        <p className="border-2 px-2 py-1 border-violet-600 rounded-[50px] text-[12px] text-[#7950f2] font-bold  dark:border-[#38bdf8] dark:text-[#38bdf8]">
          {buttonTwo}
        </p>
      </div>
      <p className="text-[12px] text-primary-color dark:text-[#7a899d] mb-5">
        {ChapterHours}
      </p>
    </div>
  );
};

export default Chapter;
