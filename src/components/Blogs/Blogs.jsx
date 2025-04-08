import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookMark, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="">
      <h1 className="text-3xl py-8 font-bold bg-green-300 mb-4 rounded">
        Total Blog: {blogs.length}
      </h1>

      <div className="all-blogs grid grid-cols-1 gap-5">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleBookMark={handleBookMark}
            handleMarkAsRead={handleMarkAsRead}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
