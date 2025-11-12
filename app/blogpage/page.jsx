"use client"
import React from "react";
import BlogCard from "@/components/BlogCard";
import { blogs } from "@/data/blogs";
import Navpc from "@/components/Navpc";

const BlogPage = () => {
  return (
    <section className="flex flex-col min-h-screen bg-gray-100">
      <Navpc page='blogpage'/>
      <h1 className="text-3xl font-bold text-center mb-6">Our Blogs</h1>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
