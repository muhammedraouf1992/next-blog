import graphqlRequest from "@/app/lib/graphqlRequest";
import { getSinglePost } from "@/app/lib/query";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleBlog = async ({ params }) => {
  const post = await getSinglePost(params.slug);

  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/blogs" className="underline hover:text-blue-500">
        back to blogs
      </Link>
      <h1 className="text-blue-500 text-5xl my-5">{post.title}</h1>
      <Image
        src={post.featuredImage.node.mediaDetails.sizes[1].sourceUrl}
        width={post.featuredImage.node.mediaDetails.sizes[1].width}
        height={post.featuredImage.node.mediaDetails.sizes[1].height}
        className="rounded-3xl "
      />
      <div
        dangerouslySetInnerHTML={{ __html: post.excerpt }}
        className="my-3"
      ></div>
    </div>
  );
};

export default SingleBlog;

export const generateStaticParams = async ({ params }) => {
  const query = {
    query: `
      query NewQuery {
        posts {
          nodes {
            slug
          }
        }
    }
  `,
  };
  const resJson = await graphqlRequest(query);
  const slugsArray = resJson.data.posts.nodes;

  return slugsArray.map((s) => {
    {
      slug: s.slug;
    }
  });
};
