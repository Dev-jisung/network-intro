"use client";

import { CheckSquare, MessagesSquare, Users, Coffee } from "lucide-react";
import { motion } from "framer-motion";

export default function Section5Teammate() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full max-w-5xl mx-auto px-6 font-sans">
      {/* 1. 타이틀 애니메이션 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        className="space-y-4 text-center mb-12"
      >
        <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-blue-500">
          Ideal Teammates
        </h2>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          이런 분들과 함께하고 싶습니다
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          성공적인 수업 발표를 위해 책임감 있게 소통할 수 있는 팀을 원합니다.
        </p>
      </motion.div>

      <div className="w-full max-w-3xl space-y-4 relative">
        {/* 장식용 세로선 */}
        <div className="absolute left-[2.35rem] top-8 bottom-8 w-px bg-zinc-200 dark:bg-zinc-800 -z-10" />

        {/* 성향 1: 책임감 (맡은 역할 수행) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false }}
          className="flex items-start gap-4 p-6 rounded-2xl bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm border border-zinc-200 dark:border-white/5 hover:border-emerald-500/50 transition-colors shadow-sm hover:shadow-md"
        >
          <div className="mt-1 p-2 rounded-full bg-emerald-500/10 text-emerald-500 bg-white dark:bg-zinc-950">
            <CheckSquare className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1 text-zinc-800 dark:text-zinc-200">
              맡은 역할을 끝까지 완수하는 책임감
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
              거창한 목표보다는, 자료 조사, PPT 제작, 발표 등 각자 배분받은
              역할을 책임감 있게 수행하여 깔끔하게 과제를 마무리할 수 있는
              분이면 좋겠습니다.
            </p>
          </div>
        </motion.div>

        {/* 성향 2: 소통 (자료 수집 / 아이디어) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          viewport={{ once: false }}
          className="flex items-start gap-4 p-6 rounded-2xl bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm border border-zinc-200 dark:border-white/5 hover:border-blue-500/50 transition-colors shadow-sm hover:shadow-md"
        >
          <div className="mt-1 p-2 rounded-full bg-blue-500/10 text-blue-500 bg-white dark:bg-zinc-950">
            <MessagesSquare className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1 text-zinc-800 dark:text-zinc-200">
              꾸준하고 편안한 소통
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
              발표를 준비하는 과정에서 찾은 유용한 자료나, 더 나은 방향에 대한
              아이디어를 부담 없이 활발하게 공유할 수 있는 팀 분위기를
              지향합니다.
            </p>
          </div>
        </motion.div>

        {/* 성향 3: 시너지 (다른 공부 병행) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: false }}
          className="flex items-start gap-4 p-6 rounded-2xl bg-white/50 dark:bg-zinc-900/40 backdrop-blur-sm border border-zinc-200 dark:border-white/5 hover:border-orange-500/50 transition-colors shadow-sm hover:shadow-md"
        >
          <div className="mt-1 p-2 rounded-full bg-orange-500/10 text-orange-500 bg-white dark:bg-zinc-950">
            <Coffee className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1 text-zinc-800 dark:text-zinc-200">
              (Option) 함께 성장하는 시너지
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
              수업 팀플로 끝나는 것도 좋지만, 서로 마음이 맞는다면 네트워크 외에
              전공 공부나 개인 프로젝트, 스터디 등도 함께 병행하며 시너지를 낼
              수 있다면 더욱 환영합니다!
            </p>
          </div>
        </motion.div>
      </div>

      {/* 2. 마무리 인사 애니메이션 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: false }}
        className="mt-16 text-center text-zinc-400 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <Users className="w-8 h-8 mb-2" />
        </motion.div>
        <span className="text-sm font-bold tracking-widest uppercase text-blue-500">
          Thank You
        </span>
      </motion.div>
    </div>
  );
}
