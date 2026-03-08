"use client";

import { motion } from "framer-motion";
import { ListTree } from "lucide-react";

export default function SectionIndex() {
  const indexes = [
    { num: "01", title: "수강신청한 이유", desc: "Motivation" },
    { num: "02", title: "네트워크 관심 분야", desc: "Fields of Interest" },
    { num: "03", title: "그 외 관심있는 분야", desc: "Other Interests" },
    { num: "04", title: "원하는 팀원 성향", desc: "Ideal Teammates" },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-full max-w-4xl mx-auto px-6 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="space-y-4 text-center mb-16"
      >
        <div className="flex justify-center mb-4">
          <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500">
            <ListTree className="w-8 h-8" />
          </div>
        </div>
        <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-blue-500">
          Table of Contents
        </h2>
      </motion.div>

      <div className="w-full max-w-2xl relative pl-2 md:pl-0">
        {/* 💡 연결선을 왼쪽 숫자 박스 중앙(left-8 = 32px)에 고정 */}
        <div className="absolute left-[2.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-zinc-200 dark:via-zinc-800 to-transparent -z-10" />

        <div className="space-y-8">
          {indexes.map((item, i) => (
            <motion.div
              key={i}
              // 💡 모든 항목이 왼쪽에서 오른쪽으로 나타나도록 통일 (-30 -> 0)
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: false }}
              // 💡 flex-row로 방향 통일
              className="flex items-center gap-6 flex-row text-left"
            >
              {/* 번호 (노드) */}
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg flex items-center justify-center text-xl font-black text-blue-500 font-mono z-10">
                {item.num}
              </div>

              {/* 텍스트 내용 */}
              <div className="flex-1 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm p-5 rounded-2xl border border-zinc-100 dark:border-white/5 shadow-sm hover:border-blue-500/50 transition-colors">
                <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium tracking-wide uppercase">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
