import React from "react";
import getAllPosts from "../lib/query";
import Link from "next/link";
import Image from "next/image";

const AllBlogs = async () => {
  const posts = await getAllPosts();
  const postsArray = posts.nodes;
  console.log(posts.nodes[0].featuredImage);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {postsArray.map((p) => (
        <div key={p.title}>
          <div>
            <Image
              src={p.featuredImage.node.mediaDetails.sizes[1].sourceUrl}
              width={p.featuredImage.node.mediaDetails.sizes[1].width}
              height={p.featuredImage.node.mediaDetails.sizes[1].height}
            />
          </div>
          <div>
            <Link href={`/blogs/${p.slug}`}>
              <h1 className="text-blue-500 text-2xl  hover:text-blue-700 duration-200">
                {p.title}
              </h1>
            </Link>
            <div
              dangerouslySetInnerHTML={{ __html: p.excerpt }}
              className="my-3"
            ></div>
            <div className="my-5">
              posted uder
              {p.categories.nodes.map((tag) => (
                <Link href={`/category/${tag.name}`}>
                  <span
                    key={tag.name}
                    className="rounded-full bg-blue-500 text-white py-2 px-3 hover:bg-blue-700 duration-200 mx-2 capitalize"
                  >
                    {tag.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllBlogs;
