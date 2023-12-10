import React from "react";

const HomePageHeader = () => {
  return (
    <div className="flex flex-col items-center max-w-xl gap-5">
      <h1 className="text-4xl text-white capitalize z-10 text-center">
        Welcome to <span className="text-blue-500 font-bold">nextblog</span>{" "}
        website
      </h1>
      <p className="text-white text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eaque
        sunt eligendi quis molestiae exercitationem, quaerat neque deleniti
        ullam error?
      </p>
      <button className="capitalize text-lg py-3 px-7 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 duration-200">
        read blog
      </button>
    </div>
  );
};

export default HomePageHeader;
