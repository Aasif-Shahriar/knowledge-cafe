import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {
  const style = { color: "#4CBB17", fontSize: "2.5rem" };
  return (
    <div>
      <div className="card bg-base-100 shadow-sm border border-green-100">
        <figure>
          <img className="w-full" src={blog.cover} alt="Shoes" />
        </figure>

        <div className="card-body">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <img className="w-12" src={blog.author_img} alt="" />
              <h1>{blog.author}</h1>
            </div>

            <div>
              <button className="self-end" onClick={() => handleBookMark(blog)}>
                <FaBookmark style={style} />
              </button>
              <p>Add book mark</p>
              <p>Reading Time: {blog.reading_time} min</p>
            </div>
          </div>
          <h2 className="font-bold text-4xl card-title">{blog.title}</h2>
          <p className="text-left">{blog.description}</p>
          <div className="flex justify-center items-center gap-2">
            {blog.hashtags.map((hash) => (
              <span className="font-bold" key={hash}>
                {" "}
                {hash}
              </span>
            ))}
          </div>
          <div className="card-actions justify-end">
            <button
              key={blog.id}
              onClick={() => handleMarkAsRead(blog.reading_time, blog.id)}
              className="btn btn-success text-slate-100"
            >
              Mark as read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
