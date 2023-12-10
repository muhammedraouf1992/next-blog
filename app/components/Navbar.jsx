import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between py-10">
      <h1 className="text-white uppercase text-2xl">
        <Link href={"/"}>
          Next<span className="text-blue-500">Blog</span>
        </Link>
      </h1>
      <ul className="flex gap-5">
        <li>
          <Link
            href={"/"}
            className="text-white uppercase hover:text-blue-500 duration-200"
          >
            home
          </Link>
        </li>
        <li>
          <Link
            href={"/about"}
            className="text-white uppercase hover:text-blue-500 duration-200"
          >
            about
          </Link>
        </li>
        <li>
          <Link
            href={"/blogs"}
            className="text-white uppercase hover:text-blue-500 duration-200"
          >
            blogs
          </Link>
        </li>
        <li>
          <Link
            href={"/contact"}
            className="text-white uppercase hover:text-blue-500 duration-200"
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
