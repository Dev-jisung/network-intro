"use client";

import { useEffect, useRef } from "react";
import { ThemeToggle } from "../components/ThemeToggle"; // 토글 버튼 임포트
import Section1Intro from "../components/Section1Intro";
import SectionIndex from "../components/SectionIndex"; // 목차 컴포넌트 임포트
import Section2Reason from "../components/Section2Reason";
import Section3NetworkInterest from "../components/Section3NetworkInterest";
import Section4OtherInterest from "../components/Section4OtherInterest";
import Section5Teammate from "../components/Section5Teammate";

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!mainRef.current) return;
      const { clientHeight } = mainRef.current;

      if (e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        mainRef.current.scrollBy({ top: clientHeight, behavior: "smooth" });
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        mainRef.current.scrollBy({ top: -clientHeight, behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* 화면 우측 하단 고정 다크모드 버튼 */}
      <ThemeToggle />

      <main
        ref={mainRef}
        className="no-scrollbar h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-500"
      >
        {/* 1. 인트로 (터미널) */}
        <section className="h-screen w-full snap-start flex-shrink-0 relative">
          <Section1Intro />
        </section>

        {/* 1-5. 목차 (새로 추가됨) */}
        <section className="h-screen w-full snap-start flex-shrink-0 relative">
          <SectionIndex />
        </section>

        {/* 2. 수강 이유 */}
        <section className="h-screen w-full snap-start flex-shrink-0 relative">
          <Section2Reason />
        </section>

        {/* 3. 네트워크 관심분야 */}
        <section className="h-screen w-full snap-start flex-shrink-0 relative">
          <Section3NetworkInterest />
        </section>

        {/* 4. 그 외 관심분야 */}
        <section className="h-screen w-full snap-start flex-shrink-0 relative">
          <Section4OtherInterest />
        </section>

        {/* 5. 팀원 성향 */}
        <section className="h-screen w-full snap-start flex-shrink-0 relative">
          <Section5Teammate />
        </section>
      </main>
    </>
  );
}
