import React from "react";
import writer from "../../../public/writer.jpg";

const Writer = () => {
  return (
    <>
      {" "}
      <h1 className=" dark:text-white text-center">
        বই
        <span className="primary-highlighter dark:text-[#38bdf8]"> লেখকঃ </span>
      </h1>
      <div
        id="writer"
        className="lg:flex items-center justify-between gap-10 py-10"
      >
        <div className="flex w-full items-center justify-center mt-5">
          <img
            src={writer}
            alt=""
            className="lg:w-[300px] w-[300px] rounded-[50px]"
            data-aos="flip-right"
          />
        </div>

        <div className="lg:w-full w-96 m-auto ">
          <p className="text-primary-color my-5 dark:text-[#7a899d]">
            আব্দুর রহমান সুলতানী একজন প্রযুক্তি উদ্যোক্তা। বুয়েটে কম্পিউটার
            সায়েন্স এন্ড ইঞ্জিনিয়ারিং নিয়ে পড়া অবস্থায় ২০০৮ সালে তিনি প্রতিষ্ঠা
            করেন বাংলাদেশের প্রথম ডিজিটাল এজেন্সি - অ্যানালাইজেন। প্রোগ্রামিং এর
            প্রতি ভালবাসা এবং মানুষকে শেখানোর প্রতি আগ্রহ থেকে এরপরে তিনি ২০২০
            সালে প্রতিষ্ঠা করেন সুলতানী প্লাটফর্ম যেখানে প্রায় ৩৫০+ প্রোগ্রামিং
            রিলেটেড ভিডিও টিউটোরিয়াল রয়েছে। সুলতানী ইউটিউব চ্যানেল এবং পাবলিক
            ফেসবুক গ্রুপ থেকে প্রায় এক লক্ষেরও বেশি মানুষ ফ্রি প্রোগ্রামিং
            শিখছে।
          </p>
          <p className="text-primary-color dark:text-[#7a899d]">
            তিনি নিজে একজন ফুল স্ট্যাক ওয়েব ডেভেলপার ও সফটওয়্যার আর্কিটেক্ট এবং
            দীর্ঘ 14 বছর ধরে তিনি ওয়েব ডেভেলপমেন্ট ও সফটওয়্যার পেশার সাথে জড়িত।
          </p>
          <div className="mt-3 text-primary-color dark:text-[#7a899d]">
            <a href="https://rs-rahaman.web.app/" target="_blank">
              <h2 className="inline-block">আব্দুর রহমান সুলতানী</h2>
            </a>
            <p className="text-sm">
              <a href="http://www.bangladesh.gov.bd" target="_blank">
                ট্রেড লাইসেন্স
              </a>{" "}
              - TRAD/DNCC/00579595/2022
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Writer;
