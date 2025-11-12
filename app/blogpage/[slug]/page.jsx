// "use client"
// import React from "react";
// import { useParams, useRouter } from "next/navigation";
// import Image from "next/image";
// import { blogs } from "@/data/blogs";
// import { ArrowLeft } from "lucide-react";

// const BlogDetails = ({params}) => {
//   const { slug } =  params;
//   console.log(slug)
//   const router = useRouter();

//   // Convert slug (which is id in our case) to number
//   const blog = blogs.find((b) => b.id === Number(slug));

//   if (!blog) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen text-center">
//         <h1 className="text-2xl font-bold text-gray-700">Blog not found 😕</h1>
//         <button
//           onClick={() => router.back()}
//           className="mt-4 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
//         >
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (

//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       {/* Header */}
//       <div className="flex items-center justify-between p-4 bg-white shadow">
//         <button
//           onClick={() => router.back()}
//           className="flex items-center text-blue-600 hover:text-blue-800"
//         >
//           <ArrowLeft className="w-5 h-5 mr-1" /> Back
//         </button>
//         <h1 className="text-xl font-bold text-gray-800">Blog Post</h1>
//       </div>

//       {/* Blog Content */}
//       <div className="bg-white m-4 rounded-lg shadow overflow-hidden">
//         <div className="relative w-full h-72">
//           <Image
//             src={blog.image}
//             alt={blog.title}
//             fill
//             className="object-cover"
//           />
//         </div>

//         <div className="p-6">
//           <h2 className="text-2xl font-bold mb-3">{blog.title}</h2>
//           <p className="text-gray-700 mb-4">{blog.description}</p>
//           <p className="text-gray-600 leading-relaxed text-justify">
//             {blog.content}
//           </p>
//           <div className="mt-6 border-t pt-4 text-sm text-gray-500">
//             <span>By {blog.author}</span>
//             <span className="ml-2">| {blog.date}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogDetails;

import React from "react";
import { blogs } from "@/data/blogs";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const page = async ({ params }) => {
  const { slug } = await params;
  console.log(typeof slug);

  return (
    <div>
      {blogs.map((item) => {
        if (item.id === Number(slug)) {
          return (
            <div className="min-h-screen bg-gray-50 flex flex-col">
              <div className="flex items-center justify-between p-4 shadow">
                <Link
                  href={'/blogpage'}
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  <ArrowLeft className="w-5 h-5 mr-1" /> Back
                </Link>
                <h1 className="text-xl font-bold text-gray-800">Blog Post</h1>
              </div>
              {/* Blog Content */}
              <div className="bg-white m-4 rounded-lg shadow overflow-hidden flex flex-col text-left items-center">
                <div className="relative w-3/4 h-72 bg-amber-500">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover h-72 w-full"
                  />
                </div>

                <div className="p-6 w-full">
                  <h2 className="text-2xl font-bold mb-3 text-gray-700">
                    {item.title}
                  </h2>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    {item.content}
                  </p>
                  <div className="mt-6 border-t pt-4 text-sm text-gray-500">
                    <span>By {item.author}</span>
                    <span className="ml-2">| {item.date}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default page;
