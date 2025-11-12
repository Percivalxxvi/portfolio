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
      className="cursor-pointer bg-white shadow-md hover:shadow-lg transition rounded-xl overflow-hidden max-w-sm w-full"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{description}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{author}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
