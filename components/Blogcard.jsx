"use client";

import React from "react";
import { useRouter } from "next/navigation";

const BlogCard = ({ id, image, title, description, author, date }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/blogpage/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="relative cursor-pointer bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-lg max-w-sm w-full
      transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)] hover:scale-[1.01] border border-gray-800"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden h-52">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-2xl transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900/70 via-transparent to-transparent opacity-70" />
      </div>

      {/* Text Section */}
      <div className="p-5 flex flex-col justify-between">
        <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-500 mb-2 line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-400 text-sm mb-3 line-clamp-3">{description}</p>

        {/* Footer */}
        <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-700 pt-3">
          <span className="font-medium text-gray-300">{author}</span>
          <span className="text-gray-400">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
