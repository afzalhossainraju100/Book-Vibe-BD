import React, { useMemo, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useLoaderData } from "react-router";
import { getStoredBooks } from "../../Utility/AddToDB";
import Book from "../Book/Book";

const ReadList = () => {
  //worst case
  const [sort, setSort] = useState("");

  const data = useLoaderData();
  const myReadList = useMemo(() => {
    const storedBookData = getStoredBooks();
    const ConvertedStoredBooks = storedBookData.map((id) => parseInt(id));
    return data.filter((book) => ConvertedStoredBooks.includes(book.bookId));
  }, [data]);

  const sortedReadList = useMemo(() => {
    if (sort === "Pages") {
      return [...myReadList].sort((a, b) => a.totalPages - b.totalPages);
    }
    if (sort === "Rating") {
      return [...myReadList].sort((a, b) => b.rating - a.rating);
    }
    return myReadList;
  }, [myReadList, sort]);

  const handleSort = (Type) => {
    setSort(Type);
  };

  return (
    <div className="flex flex-col w-[90%] mx-auto">
      <details className="dropdown ">
        <summary className="btn m-1 bg-[#ffffff] text-[#131313] border-0">
          Sort By {sort ? sort : ""}
        </summary>
        <ul className="menu dropdown-content bg-[#ffffff] text-[#131313] rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => handleSort("Pages")}>Pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("Rating")}>Rating</a>
          </li>
        </ul>
      </details>
      <Tabs>
        <TabList>
          <Tab>Read Books ({myReadList.length})</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          {sortedReadList.map((b) => (
            <Book key={b.bookId} singleBook={b}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>my wish list</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;

// If you want, I can clean it up by:
// removing the unused import,
// adding data to the dependency array, and
// replacing the effect + state with a memoized derived list (keeping your comment).
