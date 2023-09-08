import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-[70%] bg-slate-600 p-10">
        <div>
          <h1 className="text-[36px] font-all pt-4 mb-2 sm:mb-5 md:mt-2 sm:text-6xl md:text-[80px] text-white font-bold ">
            <span className="text-purple-400">নবজাগরণ</span> একাডেমি!
          </h1>

          <p className="my-1 font-all sm:text-xl md:my-4 text-white lg:my-4 md:w-3/4 ">
            প্রজন্মের দিকনির্দেশনা অঙ্গীকারবদ্ধ, শিক্ষা আলোর পথ যেন জ্বলতে থাকে
            সর্বদা, তাই আমরা শিক্ষার উজ্জ্বল পথে এবং সম্পূর্ণ নির্ভরযোগ্য ও
            বিশ্বস্ত পথে অগ্রসর করে যাচ্ছি একটি পরিপূর্ণ সমস্ত শিক্ষার প্রস্তুতি
            দেওয়ার জন্য।
          </p>
        </div>

        <div>
          <img
            src="https://www.nabojagoron-academy.com/static/media/banner.8f1bd1c46123a744084d.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
