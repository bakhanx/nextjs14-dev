import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      First Page
      <Link href={"/home"}>
        <div className="w-20 h-20 bg-black text-white ">Enter </div>
      </Link>
    </div>
  );
};

export default page;
