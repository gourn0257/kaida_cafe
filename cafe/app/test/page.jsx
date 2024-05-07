'use client'; 

// import {mysql1} from "@/library/db"
import { useState } from "react"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default ()=> {
  const router = useRouter();

  useEffect(() => {
    // 페이지 로딩을 지연시키기 위해 setTimeout 함수 사용
    const delay = 5000; // 3초로 설정
    const timer = setTimeout(() => {
      // 일정 시간이 지난 후에 페이지 이동
      router.push('/');
    }, delay);

    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머 해제
  }, []); // useEffect를 한 번만 실행하도록 빈 배열 전달

  // console.log(useState('안녕'))
}