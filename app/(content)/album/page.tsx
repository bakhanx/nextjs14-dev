import Link from "next/link";
import React from "react";

const Album = () => {
  return (
    <div className="pt-10">
      Album Main Page


      {[...Array(5)].map((e, i) => (
        <div key={i} className="p-2 bg-blue-300 w-20 m-5">
          <Link href={`/album/${i}`}>Album {i}</Link>
        </div>
      ))}
    </div>
  );
};

export default Album;
