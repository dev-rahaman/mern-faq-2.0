import React, { useContext, useState } from "react";
import BannerSm from "../../../public/banner-sm.svg";
import ekNojore from "../../../public/ekNojore.svg";
import { AuthContext } from "../../Provider/AuthProvider";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../Firebase/Firebase.config";
import { Link } from "react-router-dom";

const Banner = () => {
  const { user } = useContext(AuthContext);

  const handleDownload = async () => {
    try {
      const fileRef = ref(
        storage,
        "https://firebasestorage.googleapis.com/v0/b/mern-faq.appspot.com/o/files%2Fboo.pdf?alt=media&token=f78d471a-a104-4bc0-af14-cd13c7ef214e"
      );
      const url = await getDownloadURL(fileRef);
      FileDownload(
        "https://firebasestorage.googleapis.com/v0/b/mern-faq.appspot.com/o/files%2Fboo.pdf?alt=media&token=f78d471a-a104-4bc0-af14-cd13c7ef214e",
        "book.pdf"
      );
    } catch (error) {
      console.log("Error retrieving download URL:", error);
    }
  };

  return (
    <div id="home" className="flex flex-wrap justify-between mx-14 pt-28">
      <div className="lg:w-1/2 w-full sm:w-screen">
        <img src={BannerSm} alt="" className="w-12" />
        <p className="primary-highlighter mt-3 dark:text-[#38bdf8]">
          মার্ন স্ট্যাক কমন ইন্টারভিউ কোশ্চেন।
        </p>
        <h1 className="section-title my-3 dark:text-white">
          উত্তর দাও
          <span className="primary-highlighter dark:text-[#38bdf8]">
            {" "}
            মার্ন স্ট্যাক প্রশ্নপত্র{" "}
          </span>
          দিয়ে
        </h1>
        <p className="font-bold !text-sm text-[#515d6f]  dark:text-[#7a899d] ">
          রিডাক্স টুলকিট, আর.টি.কে কুয়ারি এবং থাংক
        </p>
        <p className="mt-12 text-[#808e9d]">
          মার্ন স্ট্যাক এর মৌলিক এবং আবশ্যিক বিষয়সমূহ প্রশ্নত্তর এর মাধ্যমে
          বুঝার পাশাপাশি এই বইয়ের প্রজেক্ট ভিত্তিক শেখানোর পদ্ধতি আপনাকে
          ইন্টারভিউতে সাফল্য অর্জন করতে সাহায্য করবে বলে আমাদের বিশ্বাস।
        </p>
        <div className="text-center mt-10 cursor-pointer w-1/2 bg-purple-600 dark:bg-[#38bdf8] text-white font-bold py-2 px-4 rounded login-button">
          <Link to={user ? "/checkout" : "/login"}>বইটি ডাউনলোড করুন</Link>
        </div>
      </div>
      <div>
        <img src={ekNojore} alt="" className="w-96 mt-10 " />
      </div>
    </div>
  );
};

export default Banner;
