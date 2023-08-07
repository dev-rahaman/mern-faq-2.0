import React from "react";
import Center from "../../Components/Center";
import ekNojore from "../../../public/ekNojore.svg";
// import maduleImg from "../../../public/moduleImage.jpg";
import ecommerce from "../../../public/ecommerce.gif";
import Chapter from "../../Components/Chapter";

const Module = () => {
  return (
    <div id="module">
      <Center
        topImg={ekNojore}
        firstText={"বইয়ে যে যে"}
        heading={"বিষয়"}
        secondText={"থাকছে।"}
        title={"12 টি অধ্যায়ে সাজানো হয়েছে পুরো বইটি।"}
      ></Center>

      <div className="lg:flex gap-10">
        <div>
          <img
            src={ecommerce}
            alt=""
            className="w-[500px] "
            data-aos="fade-up-right"
          />
        </div>

        <div
          className="w-100 p-10 h-[300px]   overflow-y-auto custom-scrollbar"
          data-aos="fade-up-left"
        >
          <Chapter
            ChapterNumber={"প্রথম অধ্যায়"}
            ChapterTitle={
              "আমরা দুইটি অধ্যায় শেষ করবো এবং রিয়্যাক্ট-রিডাক্সের মৌলিক বিষয়সমূহ বুঝবো।"
            }
            buttonOne={"রিডাক্স ফান্ডামেন্টালস"}
            buttonTwo={"ইন্ট্রোডাকশন টু রিয়্যাক্ট রিডাক্স"}
            ChapterHours={"4+ ঘণ্টার ভিডিও, 2 টি এসাইনমেন্ট"}
          ></Chapter>
          <Chapter
            ChapterNumber={"দ্বিতীয় অধ্যায়"}
            ChapterTitle={
              "আমরা দুইটি অধ্যায় শেষ করবো এবং রিয়্যাক্ট-রিডাক্সের মৌলিক বিষয়সমূহ বুঝবো।"
            }
            buttonOne={"রিডাক্স ফান্ডামেন্টালস"}
            buttonTwo={"ইন্ট্রোডাকশন টু রিয়্যাক্ট রিডাক্স"}
            ChapterHours={"4+ ঘণ্টার ভিডিও, 2 টি এসাইনমেন্ট"}
          ></Chapter>
          <Chapter
            ChapterNumber={"তৃতীয় অধ্যায়"}
            ChapterTitle={
              "আমরা দুইটি অধ্যায় শেষ করবো এবং রিয়্যাক্ট-রিডাক্সের মৌলিক বিষয়সমূহ বুঝবো।"
            }
            buttonOne={"রিডাক্স ফান্ডামেন্টালস"}
            buttonTwo={"ইন্ট্রোডাকশন টু রিয়্যাক্ট রিডাক্স"}
            ChapterHours={"4+ ঘণ্টার ভিডিও, 2 টি এসাইনমেন্ট"}
          ></Chapter>
          <Chapter
            ChapterNumber={"চতুর্থ অধ্যায়"}
            ChapterTitle={
              "আমরা দুইটি অধ্যায় শেষ করবো এবং রিয়্যাক্ট-রিডাক্সের মৌলিক বিষয়সমূহ বুঝবো।"
            }
            buttonOne={"রিডাক্স ফান্ডামেন্টালস"}
            buttonTwo={"ইন্ট্রোডাকশন টু রিয়্যাক্ট রিডাক্স"}
            ChapterHours={"4+ ঘণ্টার ভিডিও, 2 টি এসাইনমেন্ট"}
          ></Chapter>
          <Chapter
            ChapterNumber={"পঞ্চম অধ্যায়"}
            ChapterTitle={
              "আমরা দুইটি অধ্যায় শেষ করবো এবং রিয়্যাক্ট-রিডাক্সের মৌলিক বিষয়সমূহ বুঝবো।"
            }
            buttonOne={"রিডাক্স ফান্ডামেন্টালস"}
            buttonTwo={"ইন্ট্রোডাকশন টু রিয়্যাক্ট রিডাক্স"}
            ChapterHours={"4+ ঘণ্টার ভিডিও, 2 টি এসাইনমেন্ট"}
          ></Chapter>
          <Chapter
            ChapterNumber={"ষষ্ঠ অধ্যায়"}
            ChapterTitle={
              "আমরা দুইটি অধ্যায় শেষ করবো এবং রিয়্যাক্ট-রিডাক্সের মৌলিক বিষয়সমূহ বুঝবো।"
            }
            buttonOne={"রিডাক্স ফান্ডামেন্টালস"}
            buttonTwo={"ইন্ট্রোডাকশন টু রিয়্যাক্ট রিডাক্স"}
            ChapterHours={"4+ ঘণ্টার ভিডিও, 2 টি এসাইনমেন্ট"}
          ></Chapter>
          <Chapter
            ChapterNumber={"সপ্তম অধ্যায়"}
            ChapterTitle={
              "আমরা দুইটি অধ্যায় শেষ করবো এবং রিয়্যাক্ট-রিডাক্সের মৌলিক বিষয়সমূহ বুঝবো।"
            }
            buttonOne={"রিডাক্স ফান্ডামেন্টালস"}
            buttonTwo={"ইন্ট্রোডাকশন টু রিয়্যাক্ট রিডাক্স"}
            ChapterHours={"4+ ঘণ্টার ভিডিও, 2 টি এসাইনমেন্ট"}
          ></Chapter>
          <Chapter
            ChapterNumber={"অষ্টম অধ্যায়"}
            ChapterTitle={
              "আমরা দুইটি অধ্যায় শেষ করবো এবং রিয়্যাক্ট-রিডাক্সের মৌলিক বিষয়সমূহ বুঝবো।"
            }
            buttonOne={"রিডাক্স ফান্ডামেন্টালস"}
            buttonTwo={"ইন্ট্রোডাকশন টু রিয়্যাক্ট রিডাক্স"}
            ChapterHours={"4+ ঘণ্টার ভিডিও, 2 টি এসাইনমেন্ট"}
          ></Chapter>
          <Chapter
            ChapterNumber={"নবম অধ্যায়"}
            ChapterTitle={
              "আমরা দুইটি অধ্যায় শেষ করবো এবং রিয়্যাক্ট-রিডাক্সের মৌলিক বিষয়সমূহ বুঝবো।"
            }
            buttonOne={"রিডাক্স ফান্ডামেন্টালস"}
            buttonTwo={"ইন্ট্রোডাকশন টু রিয়্যাক্ট রিডাক্স"}
            ChapterHours={"4+ ঘণ্টার ভিডিও, 2 টি এসাইনমেন্ট"}
          ></Chapter>
          <Chapter
            ChapterNumber={"দশম অধ্যায়"}
            ChapterTitle={
              "আমরা দুইটি অধ্যায় শেষ করবো এবং রিয়্যাক্ট-রিডাক্সের মৌলিক বিষয়সমূহ বুঝবো।"
            }
            buttonOne={"রিডাক্স ফান্ডামেন্টালস"}
            buttonTwo={"ইন্ট্রোডাকশন টু রিয়্যাক্ট রিডাক্স"}
            ChapterHours={"4+ ঘণ্টার ভিডিও, 2 টি এসাইনমেন্ট"}
          ></Chapter>
          <Chapter
            ChapterNumber={"একাদশ অধ্যায়"}
            ChapterTitle={
              "আমরা দুইটি অধ্যায় শেষ করবো এবং রিয়্যাক্ট-রিডাক্সের মৌলিক বিষয়সমূহ বুঝবো।"
            }
            buttonOne={"রিডাক্স ফান্ডামেন্টালস"}
            buttonTwo={"ইন্ট্রোডাকশন টু রিয়্যাক্ট রিডাক্স"}
            ChapterHours={"4+ ঘণ্টার ভিডিও, 2 টি এসাইনমেন্ট"}
          ></Chapter>
          <Chapter
            ChapterNumber={"দ্বাদশ অধ্যায়"}
            ChapterTitle={
              "আমরা দুইটি অধ্যায় শেষ করবো এবং রিয়্যাক্ট-রিডাক্সের মৌলিক বিষয়সমূহ বুঝবো।"
            }
            buttonOne={"রিডাক্স ফান্ডামেন্টালস"}
            buttonTwo={"ইন্ট্রোডাকশন টু রিয়্যাক্ট রিডাক্স"}
            ChapterHours={"4+ ঘণ্টার ভিডিও, 2 টি এসাইনমেন্ট"}
          ></Chapter>
          <Chapter
            ChapterNumber={"ত্রয়োদশ অধ্যায়"}
            ChapterTitle={
              "আমরা দুইটি অধ্যায় শেষ করবো এবং রিয়্যাক্ট-রিডাক্সের মৌলিক বিষয়সমূহ বুঝবো।"
            }
            buttonOne={"রিডাক্স ফান্ডামেন্টালস"}
            buttonTwo={"ইন্ট্রোডাকশন টু রিয়্যাক্ট রিডাক্স"}
            ChapterHours={"4+ ঘণ্টার ভিডিও, 2 টি এসাইনমেন্ট"}
          ></Chapter>
          <Chapter
            ChapterNumber={"চতুর্দশ অধ্যায়"}
            ChapterTitle={
              "আমরা দুইটি অধ্যায় শেষ করবো এবং রিয়্যাক্ট-রিডাক্সের মৌলিক বিষয়সমূহ বুঝবো।"
            }
            buttonOne={"রিডাক্স ফান্ডামেন্টালস"}
            buttonTwo={"ইন্ট্রোডাকশন টু রিয়্যাক্ট রিডাক্স"}
            ChapterHours={"4+ ঘণ্টার ভিডিও, 2 টি এসাইনমেন্ট"}
          ></Chapter>
          <Chapter
            ChapterNumber={"পঞ্চদশ অধ্যায়"}
            ChapterTitle={
              "আমরা দুইটি অধ্যায় শেষ করবো এবং রিয়্যাক্ট-রিডাক্সের মৌলিক বিষয়সমূহ বুঝবো।"
            }
            buttonOne={"রিডাক্স ফান্ডামেন্টালস"}
            buttonTwo={"ইন্ট্রোডাকশন টু রিয়্যাক্ট রিডাক্স"}
            ChapterHours={"4+ ঘণ্টার ভিডিও, 2 টি এসাইনমেন্ট"}
          ></Chapter>
        </div>
      </div>
    </div>
  );
};

export default Module;
