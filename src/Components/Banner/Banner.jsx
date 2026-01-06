import React from "react";
import bannerImage from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="banner flex flex-col-reverse md:flex-row gap-8  justify-between items-center bg-[#F3F3F3] rounded-lg p-16  mt-8 w-[90%] mx-auto mb-8">
      <div className="flex flex-col gap-10">
        <h1 className="text-[3.5rem]">
          Books to freshen <br /> up your bookshelf
        </h1>
        <button className="btn bg-[#23BE0A] border-0 py-[21px] px-[28px] text-white hover:bg-[#1b8c08] w-[180px]">
          View The List
        </button>
      </div>
      <div>
        <img src={bannerImage} alt="Bookshelf" />
      </div>
    </div>
  );
};

export default Banner;
