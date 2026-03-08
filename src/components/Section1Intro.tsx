"use client";

import React, { useState, useEffect } from "react";
import { ChevronRight, Network } from "lucide-react";

export default function HeroSection() {
  const [step, setStep] = useState(0);
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const cmd1 = "cat title.txt";
  const cmd2 = "cat profile.txt";

  useEffect(() => {
    const runAnimation = async () => {
      await new Promise((res) => setTimeout(res, 400));
      setStep(1);
      for (let i = 0; i <= cmd1.length; i++) {
        setText1(cmd1.slice(0, i));
        await new Promise((res) => setTimeout(res, 60));
      }

      setStep(2);
      await new Promise((res) => setTimeout(res, 600));

      setStep(3);
      for (let i = 0; i <= cmd2.length; i++) {
        setText2(cmd2.slice(0, i));
        await new Promise((res) => setTimeout(res, 50));
      }

      await new Promise((res) => setTimeout(res, 200));
      setStep(4);

      await new Promise((res) => setTimeout(res, 300));
      setStep(5);
    };
    runAnimation();
  }, [cmd1, cmd2]);

  // 💡 버튼 클릭 시 다음 슬라이드로 부드럽게 스크롤하는 함수
  const handleNextSlide = () => {
    // page.tsx의 최상단 스크롤 컨테이너인 <main>을 찾습니다.
    const scrollContainer = document.querySelector("main");
    if (scrollContainer) {
      // 내 모니터 화면 높이(100vh)만큼 아래로 부드럽게 스크롤
      scrollContainer.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    // 💡 min-h-[500px] py-20 제거 -> h-screen 적용으로 모니터 정중앙 배치
    <div className="flex items-center justify-center h-screen w-full font-sans">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-6xl px-6">
        {/* 왼쪽: 고정 크기 터미널 */}
        <div className="w-full max-w-xl shrink-0">
          <div className="w-full h-[380px] font-mono rounded-3xl border border-white/20 dark:border-white/10 bg-zinc-950/80 backdrop-blur-3xl overflow-hidden shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-2 border-b border-white/10 bg-white/5 text-[10px] font-bold text-zinc-500">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <span className="uppercase tracking-widest italic font-sans text-zinc-400">
                Network_Profile_Initialization
              </span>
              <div className="w-10" />
            </div>

            <div className="p-8 md:p-6 text-left space-y-6 flex-1 flex flex-col overflow-hidden">
              <div className="min-h-[90px]">
                <div className="flex gap-3 text-base text-zinc-400 italic mb-4">
                  <span className="text-blue-500 font-bold font-sans">➜</span>
                  <span className="text-emerald-500">{text1}</span>
                  {step === 1 && (
                    <span className="w-2 h-5 bg-blue-500 animate-pulse" />
                  )}
                </div>

                {step >= 2 && (
                  <div className="ml-6 animate-in fade-in slide-in-from-left-4 duration-500">
                    <div className="text-zinc-300 text-lg md:text-xl font-medium flex items-center">
                      <span className="text-blue-400 w-20 inline-block text-sm uppercase tracking-widest font-bold">
                        Title
                      </span>
                      <span className="text-zinc-600 mx-3">|</span>
                      <span className="text-white font-black tracking-tight">
                        네트워크 자기소개
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="min-h-[120px]">
                {step >= 3 && (
                  <div className="space-y-4 animate-in fade-in duration-500">
                    <div className="flex gap-3 text-base text-zinc-400 italic mb-4">
                      <span className="text-blue-500 font-bold font-sans">
                        ➜
                      </span>
                      <span className="text-emerald-500">{text2}</span>
                      {step === 3 && (
                        <span className="w-2 h-5 bg-blue-500 animate-pulse" />
                      )}
                    </div>

                    {step >= 4 && (
                      <div className="ml-6 space-y-3 text-sm md:text-base animate-in fade-in slide-in-from-left-4 duration-500 font-medium">
                        <div className="text-zinc-300 flex items-center">
                          <span className="text-blue-400 w-20 inline-block text-xs uppercase tracking-widest font-bold">
                            Name
                          </span>
                          <span className="text-zinc-600 mx-3">|</span>
                          <span className="text-white font-bold text-lg">
                            황지성
                          </span>
                        </div>
                        <div className="text-zinc-300 flex items-center">
                          <span className="text-blue-400 w-20 inline-block text-xs uppercase tracking-widest font-bold">
                            Major
                          </span>
                          <span className="text-zinc-600 mx-3">|</span>
                          <span className="text-white">컴퓨터공학부</span>
                        </div>
                        <div className="text-zinc-300 flex items-center">
                          <span className="text-blue-400 w-20 inline-block text-xs uppercase tracking-widest font-bold">
                            ID
                          </span>
                          <span className="text-zinc-600 mx-3">|</span>
                          <span className="text-emerald-400 font-mono tracking-wider">
                            2022243102
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="mt-auto pt-2">
                {step >= 5 && (
                  <div className="flex gap-3 text-base italic animate-in fade-in duration-300">
                    <span className="text-blue-500 font-bold font-sans">➜</span>
                    <span className="animate-pulse bg-blue-500 w-2.5 h-6 shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 오른쪽: 꾸며진 영역 */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 relative w-full max-w-sm">
          <div className="absolute -top-12 -right-4 opacity-10 pointer-events-none text-blue-500">
            <Network size={160} strokeWidth={1} />
          </div>

          <div className="space-y-4 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              System Online
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white leading-tight">
              Hello, <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
                Network!
              </span>
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
              본격적인 발표를 시작합니다.
            </p>
          </div>

          <button
            onClick={handleNextSlide}
            className="group relative flex items-center justify-between w-full max-w-[280px] px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg transition-colors shadow-lg hover:shadow-xl cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <span>Get started</span>
            </span>
            {/* 호버 시 화살표만 오른쪽으로 살짝 이동 */}
            <ChevronRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
