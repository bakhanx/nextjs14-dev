"use client";

import Button from "@/components/button";
import useThrottle from "@/hooks/useThrottle";
import { Span } from "next/dist/trace";
import React, { Ref, Reference, useRef, useState } from "react";

const LOTTO_LENGTH = 6;

const lottoCreatorNumbers = () => {
  const lottoNumbers: number[] = [];
  for (let i = 0; i < LOTTO_LENGTH; i++) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    if (lottoNumbers.includes(randomNumber)) {
      i--;
      continue;
    }
    lottoNumbers.push(randomNumber);
  }
  const sortedNumbers = lottoNumbers.sort((a, b) => a - b);
  return sortedNumbers;
};

const Lotto = () => {
  const initLottoNumbers = Array(LOTTO_LENGTH).fill(7);
  const [lottoNumbers, setLottoNumbers] = useState(initLottoNumbers);

  const handlePlayLotto = useThrottle(() => {
    const result = lottoCreatorNumbers();
    setLottoNumbers(result);
  }, 1000);


  return (
    <div>
      <p>로또 페이지</p>
      <Button name={"로또 생성하기"} onClick={handlePlayLotto} />
      <div className="flex text-center gap-x-2 pt-3">
        {lottoNumbers.map((lottoNumber, i) => (
          <span
            key={i}
            className="p-2 bg-blue-700 text-white rounded-full w-10 h-10 "
          >
            {lottoNumber}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Lotto;
