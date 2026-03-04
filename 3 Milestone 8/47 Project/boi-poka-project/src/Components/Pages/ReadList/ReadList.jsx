import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../../addToDB";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const data = useLoaderData();
  const [sort, setSort] = useState("");

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertStoredBookData = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertStoredBookData.includes(book.bookId),
    );
    setReadList(myReadList);
  }, [data]);

  const handleSort = (type) => {
    setSort(type);

    if (type == "pages") {
      const sortedBypages = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages,
      );
      setReadList(sortedBypages);
      // console.log(sortedBypages);
    }
    if (type == "rating") {
      const sortedByRating = [...readList].sort((a, b) => b.rating - a.rating);
      setReadList(sortedByRating);
      console.log(sortedByRating);
    }
  };
  // console.log(readList);
  return (
    <div>
      <details className="dropdown">
        <summary className="btn m-1">Sort by: {sort ? sort : ""}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => handleSort("pages")}>Pages Num</a>
          </li>
          <li>
            <a onClick={() => handleSort("rating")}>Rating</a>
          </li>
        </ul>
      </details>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My wish list</Tab>
        </TabList>

        <TabPanel>
          <h2>Book i read {readList.length}</h2>
          <div className="flex flex-col gap-4">
            {readList.map((eachBook) => (
              <div>
                <h2>{eachBook.bookName}</h2>
                <p>{eachBook.totalPages}</p>
                <img className="w-50" src={eachBook.image} alt="" />
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>My wishes</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
