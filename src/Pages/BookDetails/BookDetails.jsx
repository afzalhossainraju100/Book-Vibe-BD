import React from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router";
import { addToStoreDB } from "../../Utility/AddToDB";

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === parseInt(id));
  const {
    bookId,
    bookName,
    author,
    publisher,
    category,
    image,
    rating,
    tags = [],
    review,
    totalPages,
    yearOfPublishing,
  } = singleBook;
  const [tags0, tags1] = tags;

  const handleMarkAsRead = id =>{
    //store with ID
    //Where to store
    // array or cullection
    //how to avoid duplication
    //if the book not exist in the DB, add to DB
    addToStoreDB(id);

  }
  return (
    <div className="w-[90%] mx-auto gap-8 items-stretch flex flex-col lg:flex-row gap-8 items-stretch">
      <div
        className="border-0 rounded-xl p-8 
          bg-[#1313130d] w-full shadow-sm flex justify-center items-center"
      >
        <img
          className="border-0 shadow-sm w-full h-auto object-contain max-h-[600px]"
          src={image}
          alt={bookName}
        />
      </div>
      <div className="w-full flex flex-col gap-4 ">
        <h2 className="text-[#131313] font-bold text-[40px] leading-[53px] text-left">
          {bookName}
        </h2>
        <p className="text-[#131313]/80 font-medium text-[20px] leading-[23px] text-left">
          By: {author}
        </p>
        <hr className="border border-[#131313]/15" />
        <p className="text-[#131313]/80 font-medium text-[20px] leading-[23px] text-left">
          {category}
        </p>
        <hr className="border border-[#131313]/15" />
        <p>
          <b>Review: </b>
          <span className="font-medium text-[#131313B3] leading-[0px] font-[400] text-left text-sm">
            {review}
          </span>
        </p>
        <p className="flex flex-row gap-6 justify-left items-center">
          <b>Tag</b>
          <span className="btn bg-[#23BE0A0D] text-[#23BE0A] border-0 rounded-2xl">
            {tags0}
          </span>
          <span className="btn bg-[#23BE0A0D] text-[#23BE0A] border-0 rounded-2xl">
            {tags1}
          </span>
        </p>
        <hr />
        <div className="flex flex-col gap-4 w-[50%] ">
          <p className="flex flex-row justify-between">
            <span className="text-[#131313]/70 font-normal text-base leading-[26px] text-left">
              Number of Pages:
            </span>
            <span className="text-[#131313] font-semibold text-base leading-[26px] text-left">
              {totalPages}
            </span>
          </p>
          <p className="flex flex-row justify-between">
            <span className="text-[#131313]/70 font-normal text-base leading-[26px] text-left">
              Publisher:
            </span>{" "}
            <span className="text-[#131313] font-semibold text-base leading-[26px] text-left">
              {publisher}
            </span>
          </p>
          <p className="flex flex-row justify-between">
            <span className="text-[#131313]/70 font-normal text-base leading-[26px] text-left">
              Year of Publishing:
            </span>
            <span className="text-[#131313] font-semibold text-base leading-[26px] text-left">
              {yearOfPublishing}
            </span>
          </p>
          <p className="flex flex-row justify-between">
            <span className="text-[#131313]/70 font-normal text-base leading-[26px] text-left">
              Rating:
            </span>
            <span className="text-[#131313] font-semibold text-base leading-[26px] text-left">
              {rating}
            </span>
          </p>
        </div>
        <div className="flex flex-row gap-4 mt-1">
          <button onClick={() => handleMarkAsRead(id)} className="btn bg-[#ffffff] text-[#131313] border-0 shadow-2">
            Read
          </button>
          <button className="btn bg-[#50B1C9] text-[#FFFFFF] border-0 shadow-2">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
