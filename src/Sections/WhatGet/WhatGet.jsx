import React from "react";
import Center from "../../Components/Center";
import whatget from "../../../public/whatget.svg";
import Cart from "../../Components/Cart";

const WhatGet = () => {
  return (
    <div id="whatGet">
      <Center
        topImg={whatget}
        firstText={"বইয়ে"}
        heading={"যা পাবেন"}
        title={"বইটি শেষ করার পর আপনি আমাদের থেকে যা কিছু পাবেন"}
      ></Center>

      <div className="flex flex-wrap justify-center items-center">
        <Cart
          svgIcon={
            <div className="p-3 bg-[#eae5f8] rounded-[50px]">
              {" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="text-violet-500 dark:text-secondary1"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.06 14.68a1 1 0 0 0 .46.6l1.91 1.11v2.2a1 1 0 0 0 1 1h2.2l1.11 1.91a1 1 0 0 0 .86.5 1 1 0 0 0 .51-.14l1.9-1.1 1.91 1.1a1 1 0 0 0 1.37-.36l1.1-1.91h2.2a1 1 0 0 0 1-1v-2.2l1.91-1.11a1 1 0 0 0 .37-1.36L20.76 12l1.11-1.91a1 1 0 0 0-.37-1.36l-1.91-1.1v-2.2a1 1 0 0 0-1-1h-2.2l-1.1-1.91a1 1 0 0 0-.61-.46 1 1 0 0 0-.76.1L12 3.26l-1.9-1.1a1 1 0 0 0-1.36.36L7.63 4.43h-2.2a1 1 0 0 0-1 1v2.2l-1.9 1.1a1 1 0 0 0-.37 1.37l1.1 1.9-1.1 1.91a1 1 0 0 0-.1.77zm3.22-3.17L4.39 10l1.55-.9a1 1 0 0 0 .49-.86V6.43h1.78a1 1 0 0 0 .87-.5L10 4.39l1.54.89a1 1 0 0 0 1 0l1.55-.89.91 1.54a1 1 0 0 0 .87.5h1.77v1.78a1 1 0 0 0 .5.86l1.54.9-.89 1.54a1 1 0 0 0 0 1l.89 1.54-1.54.9a1 1 0 0 0-.5.86v1.78h-1.83a1 1 0 0 0-.86.5l-.89 1.54-1.55-.89a1 1 0 0 0-1 0l-1.51.89-.89-1.54a1 1 0 0 0-.87-.5H6.43v-1.78a1 1 0 0 0-.49-.81l-1.55-.9.89-1.54a1 1 0 0 0 0-1.05z"></path>
              </svg>
            </div>
          }
          cartTitle={"কোর্স সার্টিফিকেট"}
          cartParagraph={
            "যারা কোর্সের সবগুলো এসাইনমেন্ট & ফাইনাল পরীক্ষায় অংশগ্রহণ করে কমপক্ষে 50% মার্ক পাবেন তারা কোর্স সার্টিফিকেট পাবেন। সার্টিফিকেটটির সফট কপি অনলাইনেই ডাউনলোড করতে পারবেন। কোন প্রিন্টেড কপি দেয়া হবে না।"
          }
        ></Cart>

        <Cart
          svgIcon={
            <div className="p-3 bg-[#eae5f8] rounded-[50px]">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                version="1.1"
                viewBox="0 0 16 16"
                class="text-violet-500 dark:text-secondary1"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 9.5l-4.5 4.5-1.5-1.5-1 1 2.5 2.5 5.5-5.5z"></path>
                <path d="M7 12h5v-1.799c-1.050-0.613-2.442-1.033-4-1.16v-0.825c1.102-0.621 2-2.168 2-3.716 0-2.485 0-4.5-3-4.5s-3 2.015-3 4.5c0 1.548 0.898 3.095 2 3.716v0.825c-3.392 0.277-6 1.944-6 3.959h7v-1z"></path>
              </svg>
            </div>
          }
          cartTitle={"লাইফটাইম কোর্স এক্সেস"}
          cartParagraph={
            "যারা কোর্সটি একবার কিনবেন, তারা কোর্সের সকল কন্টেন্ট এর লাইফটাইম এক্সেস পাবেন এবং ভবিষ্যতের সকল আপডেট পেতে থাকবেন। এছাড়া প্রাইভেট সাপোর্ট চ্যানেলে আজীবন এক্সেস থেকে যাবে যেখানে প্রশ্ন করলে আমরা উত্তর দেয়ার চেষ্টা করবো।"
          }
        ></Cart>

        <Cart
          svgIcon={
            <div className="p-3 bg-[#eae5f8] rounded-[50px]">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="text-violet-500 dark:text-secondary1"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
              </svg>
            </div>
          }
          cartTitle={"আমাদের সাথে কাজ করার সুযোগ"}
          cartParagraph={
            "কোর্সের ছাত্রদের মধ্য থেকে উপযুক্ত কাউকে পছন্দ হলে আমরা যাচাই বাছাই করে আমাদের কোম্পানিতে পেইড ইন্টার্নশিপের সুযোগ দিতে পারি। তারা মার্ন স্ট্যাক প্রশ্নপত্র এর ফাউন্ডার সুমিত সাহার সাথে সরাসরি কাজ করার সুযোগ পাবেন।"
          }
        ></Cart>
      </div>
    </div>
  );
};

export default WhatGet;
