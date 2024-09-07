import Link from "next/link";
import React from "react";
import card from "@/styles/Card.module.css";

const Album = () => {
  return (
    <div className="grid grid-cols-3 bg-black">
      {[...Array(5)].map((e, i) => (
        <div key={i} className={`${card.container}`}>
          <div className={`${card.card} `}>{i}</div>
        </div>
      ))}
    </div>
  );
};

export default Album;
