import React from "react";
import whatKnow from "../../../public/whatKnow.svg";
import KnowCart from "../../Components/KnowCart";
import html from "../../../public/html.svg";
import css from "../../../public/css.svg";
import js from "../../../public/js.svg";
import react from "../../../public/react.svg";
import git from "../../../public/git.svg";
import vscode from "../../../public/vscode.svg";

const WhatKnow = () => {
  return (
    <div id="whatKnow" className="lg:flex items-center justify-between gap-10">
      <div className="lg:w-2/3 w-96 m-auto">
        <div>
          <img src={whatKnow} alt="" data-aos="fade-down" className="w-1/3" />
        </div>
        <div>
          <h1 className="text-xl my-5  dark:text-white">
            বইটি পড়ে উপকৃত হতে{" "}
            <span className="primary-highlighter dark:text-[#38bdf8]">
              যা জানতে হবে।
            </span>
          </h1>
          <p className="text-primary-color  dark:text-[#7a899d]">
            এই বইটি একেবারে বিগিনারদের জন্য নয়। বইটি পড়ে উপকৃত হতে হলে উল্লিখিত
            বিষয়গুলো সম্পর্কে আপনার ধারণা থাকতে হবে। এই বইটি ক্রয় করা মানে ধরে
            নেয়া হবে আপনি বিষয়গুলো জানেন। যদি না জানেন, তাহলে রেকোমেন্ডেড লিঙ্ক
            থেকে শিখে নিতে পারেন।
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        <KnowCart
          knowCartImage={html}
          knowCartTitle={"বেসিক HTML"}
          knowCartParagraph={"HTML সম্পর্কে প্রাথমিক ধারণা থাকতে হবে।"}
          knowCartLink={"https://www.w3schools.com/html/"}
        />
        <KnowCart
          knowCartImage={css}
          knowCartTitle={"বেসিক CSS"}
          knowCartParagraph={"CSS সম্পর্কে প্রাথমিক ধারণা থাকতে হবে।"}
          knowCartLink={"https://www.w3schools.com/css/"}
        />

        <KnowCart
          knowCartImage={js}
          knowCartTitle={"বেসিক ও মডার্ন JavaScript"}
          knowCartParagraph={
            "বেসিক ও মডার্ন JavaScript সম্পর্কে ধারণা থাকতে হবে।"
          }
          knowCartLink={"https://react.dev/"}
        />

        <KnowCart
          knowCartImage={react}
          knowCartTitle={"বেসিক React.js"}
          knowCartParagraph={"React.js সম্পর্কে প্রাথমিক ধারণা থাকতে হবে।"}
          knowCartLink={"https://react.dev/"}
        />
        <KnowCart
          knowCartImage={git}
          knowCartTitle={"বেসিক Git/GitHub"}
          knowCartParagraph={"Git/GitHub সম্পর্কে প্রাথমিক ধারণা থাকতে হবে।"}
          knowCartLink={"https://git-scm.com/doc"}
        />
        <KnowCart
          knowCartImage={vscode}
          knowCartTitle={"VS Code এডিটর"}
          knowCartParagraph={"VS Code এডিটরে কাজ করার অভ্যাস থাকতে হবে।"}
          knowCartLink={"https://www.youtube.com/watch?v=VqCgcpAypFQ"}
        />
      </div>
    </div>
  );
};

export default WhatKnow;
