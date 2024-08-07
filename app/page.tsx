import { HomePage } from "@/components/pages/home-page";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div>테스트 페이지 링크 모음</div>

      {/* Link */}
      <div className="pt-10 flex gap-x-2">
        <Link href={"/cart"} className="border border-gray-500 p-2">
          장바구니
        </Link>
        <Link href={"/movie"} className="border border-gray-500 p-2">
          영화
        </Link>
        <Link href={"/about"} className="border border-gray-500 p-2">
          소개
        </Link>
        <Link href={"/album"} className="border border-gray-500 p-2">
          앨범
        </Link>
        <Link href={"/admin"} className="border border-gray-500 p-2">
          관리자
        </Link>
        <Link href={"/home"} className="border border-gray-500 p-2">
          홈
        </Link>
        <Link href={"/lotto"} className="border border-gray-500 p-2">
          로또
        </Link>
      </div>
    </div>
  );
};

export default page;
