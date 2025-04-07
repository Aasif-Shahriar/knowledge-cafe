import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Blogs from "./components/Blogs/Blogs";

const App = () => {
  const [bookMarked, setBookMarked] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookMark = (blog) => {
    setBookMarked([...bookMarked, blog]);
  };

  const handleMarkAsRead = (time,id) => {
    setReadingTime(readingTime+time);
    removeFromBookMark(id)
  };

  const removeFromBookMark = (id) => {
    const remainingBookMark = bookMarked.filter((mark) => mark.id !== id)
   setBookMarked(remainingBookMark)
  }

  return (
    <div className="container mx-auto">
      <Navbar></Navbar>

      <div className=" main-container flex gap-10 text-center my-10">
        <div className="left-container w-[70%]">
          <Blogs
            handleBookMark={handleBookMark}
            handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
        </div>

        <div className="right-container w-[30%] bg-green-200 rounded">
         <div className="flex gap-4 justify-center items-center my-5">
         <h1 className="bg-green-500 font-bold p-4 rounded text-slate-100">Reading time: {readingTime} min</h1>
         <h1 className="bg-green-500 font-bold p-4 rounded text-slate-100">Bookmarks count: {bookMarked.length}</h1>
         </div>

          {bookMarked.map((marked) => (
            <p key={marked.id} className="bg-purple-500 p-2 m-2 text-white shadow">Marked Title: {marked.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
