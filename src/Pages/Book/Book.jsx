import React from "react";
import Frame1 from "../../assets/Frame1.png";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  // console.log(allBooks);
  // const data = use(bookPromise);

  const { bookName, author, category, image, rating, tags = [] } = singleBook;
  const [tags0, tags1] = tags;

  return (
      <div className="h-full">
      <div className="card bg-[#ffffff] w-full shadow-sm rounded-2xl h-full flex flex-col">
        <div className="card-body p-6 pb-0">
          <figure className="bg-[#f3f3f3] rounded-2xl p-4 flex justify-center items-center mb-1 h-64">
            <img
              className="h-full w-auto object-contain"
              src={image}
              alt={bookName}
            />
          </figure>
        </div>
        <div className="card-body flex-1 pt-4 space-y-3">
          <div className="flex flex-row flex-wrap gap-3 mb-1">
            {tags0 && (
              <button className="text-[#23be0a] px-3 py-2 border-0 bg-[#23BE0A0D] rounded-lg text-base md:text-lg leading-relaxed font-medium text-center">
                {tags0}
              </button>
            )}
            {tags1 && (
              <button className="text-[#23be0a] px-3 py-2 border-0 bg-[#23BE0A0D] rounded-lg text-base md:text-lg leading-relaxed font-medium text-center">
                {tags1}
              </button>
            )}
          </div>
          <h2 className="card-title text-2xl font-bold leading-8 text-left">
            {bookName}
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-medium leading-5 sm:leading-[19px] md:leading-6 text-left">
            By : {author}
          </p>
          <div className="card-actions justify-between border-t border-dashed border-[rgba(19,19,19,0.15)] py-4 mt-auto">
            <div className="badge badge-outline border-0 text-[16px] font-medium leading-[19px] text-center">
              {category}
            </div>
            <div className="badge badge-outline border-0 text-[16px] font-medium leading-[19px] text-center">
              <p>{rating}</p>
              <img src={Frame1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
