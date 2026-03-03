import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../../addToDB";

const ReadList = () => {
    const [readList, setReadList] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertStoredBookData = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) => convertStoredBookData.includes(book.bookId));
    setReadList(myReadList);
  }, [data]);
  console.log(readList);
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My wish list</Tab>
        </TabList>

        <TabPanel>
          <h2>Book i read  {readList.length}</h2>
        </TabPanel>
        <TabPanel>
          <h2>My wishes</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
