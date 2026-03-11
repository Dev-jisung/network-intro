// components/Section4OtherInterest.tsx
"use client";

import {
  MonitorSmartphone,
  BookOpenText,
  Sparkles,
  Gamepad2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Section4OtherInterest() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full max-w-5xl mx-auto px-6 font-sans">
      {/* 1. 타이틀 애니메이션 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        className="space-y-4 text-center mb-16"
      >
        <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-blue-500">
          Other Interests
        </h2>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          그 외 관심있는 분야
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          네트워크 외에도 최신 기술 트렌드와 개인적인 취미를 균형 있게 즐기고
          있습니다.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* 관심사 1: 웹 풀스택 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false }}
          className="group p-8 rounded-3xl border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors shadow-lg"
        >
          <MonitorSmartphone className="w-10 h-10 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold mb-2 text-zinc-800 dark:text-zinc-200">
            웹 풀스택 개발
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
            Next.js와 React를 활용한 프론트엔드 영역뿐만 아니라, 백엔드 로직과
            데이터베이스를 연결하여 하나의 온전한 웹 서비스를 구축하는 풀스택
            개발에 관심이 많습니다.
          </p>
        </motion.div>

        {/* 관심사 2: 문서화 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          viewport={{ once: false }}
          className="group p-8 rounded-3xl border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors shadow-lg"
        >
          <BookOpenText className="w-10 h-10 text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold mb-2 text-zinc-800 dark:text-zinc-200">
            지식 체계화 및 문서화
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
            새롭게 배운 CS 지식이나 개발 중 겪은 트러블슈팅 과정을 마크다운
            기반의 Docs 사이트나 기술 블로그로 구축하여, 나만의 지식 체계로
            기록하고 정리하는 것을 즐깁니다.
          </p>
        </motion.div>

        {/* 관심사 3: AI 활용 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: false }}
          className="group p-8 rounded-3xl border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors shadow-lg"
        >
          <Sparkles className="w-10 h-10 text-orange-500 mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold mb-2 text-zinc-800 dark:text-zinc-200">
            AI 트렌드 & 개발 활용
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
            빠르게 발전하는 최신 AI 소식들을 꾸준히 팔로우하고 있습니다. 또한
            코딩 과정에 AI를 적극적으로 도입하여 개발 생산성을 높이는 방법에
            대해 끊임없이 연구합니다.
          </p>
        </motion.div>

        {/* 관심사 4: 게임 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          viewport={{ once: false }}
          className="group p-8 rounded-3xl border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors shadow-lg"
        >
          <Gamepad2 className="w-10 h-10 text-purple-500 mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold mb-2 text-zinc-800 dark:text-zinc-200">
            FPS 게임
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
            개발로 쌓인 피로는 오버워치나 발로란트 같은 FPS 게임을 즐기며
            풉니다. 팀원들과 빠르게 합을 맞추고 실시간으로 상황을 판단하며
            플레이하는 것을 좋아합니다.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
