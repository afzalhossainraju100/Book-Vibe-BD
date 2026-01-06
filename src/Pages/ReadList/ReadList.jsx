import React, { use } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useLoaderData } from "react-router";
import { useEffect } from 'react';
import { getStoredBooks } from '../../Utility/AddToDB';
import Book from '../Book/Book';

const ReadList = () => {
    //worst case
    const data = useLoaderData();
    const [myReadList, setMyReadList] = React.useState([]);
    useEffect(()=>{
        const storedBookData = getStoredBooks();
        const ConvertedStoredBooks= storedBookData.map(id => parseInt(id));
        const filteredReadList = data.filter(book => ConvertedStoredBooks.includes(book.bookId));
        setMyReadList(filteredReadList);
    },[])

    return (
      <div className="flex flex-col w-[90%] mx-auto">
        <Tabs>
          <TabList>
            <Tab>Read Books ({myReadList.length})</Tab>
            <Tab>Wishlist</Tab>
          </TabList>

          <TabPanel >
            {
          myReadList.map(b => <Book key={b.bookId} singleBook={b}></Book>)
            }
            </TabPanel>
          <TabPanel>
            <h2>my wish list</h2>
          </TabPanel>
        </Tabs>
      </div>
    );
};

export default ReadList;