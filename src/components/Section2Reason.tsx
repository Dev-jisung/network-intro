"use client";

import { Globe, Layers, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Section2Reason() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full max-w-5xl mx-auto px-6 font-sans">
      {/* 1. 타이틀 영역 애니메이션 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        className="space-y-4 text-center mb-16"
      >
        <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-blue-500">
          Motivation
        </h2>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          네트워크 수업을 수강한 이유
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          실전 개발 경험을 통해 느낀 네트워크 지식의 갈증을 해소하고 싶습니다.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8 w-full relative">
        {/* 중앙 연결선 */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent -translate-y-1/2 -z-10" />

        {/* 이유 1: CS 기초 체력 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
          className="flex-1 flex flex-col items-center text-center p-8 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md rounded-3xl border border-zinc-200 dark:border-white/5 shadow-xl hover:-translate-y-2 transition-transform duration-300"
        >
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
            <Layers className="w-8 h-8 text-emerald-500" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-zinc-800 dark:text-zinc-200">
            탄탄한 CS 기초 체력
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            직접 코딩을 하거나 AI를 활용한 바이브 코딩을 할 때도 결국 네트워크
            개념에서 막히는 경험을 종종 했습니다.{" "}
            <b>
              컴퓨터 구조, 운영체제, 알고리즘, DB만큼이나 중요한 핵심 기초 체력
            </b>
            이라고 생각합니다.
          </p>
        </motion.div>

        {/* 이유 2: 웹 통신의 원리 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
          className="flex-1 flex flex-col items-center text-center p-8 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md rounded-3xl border border-zinc-200 dark:border-white/5 shadow-xl hover:-translate-y-2 transition-transform duration-300"
        >
          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
            <Globe className="w-8 h-8 text-blue-500" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-zinc-800 dark:text-zinc-200">
            웹 통신의 원리 탐구
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Next.js와 React 등으로 웹을 개발하며 <b>HTTP/HTTPS와 WebSocket</b>이
            실제로 어떻게 데이터를 주고받는지, 단순한 API 호출을 넘어 그 이면의
            동작 원리를 깊이 파헤치고 싶습니다.
          </p>
        </motion.div>

        {/* 이유 3: 보안 & 클라우드 인프라 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: false }}
          className="flex-1 flex flex-col items-center text-center p-8 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md rounded-3xl border border-zinc-200 dark:border-white/5 shadow-xl hover:-translate-y-2 transition-transform duration-300"
        >
          <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
            <ShieldCheck className="w-8 h-8 text-purple-500" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-zinc-800 dark:text-zinc-200">
            보안 및 클라우드 인프라
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            최근 네트워크 보안 공격 뉴스를 접하며 호기심이 생겼습니다. 또한{" "}
            <b>GCP에 백엔드를 직접 배포하고 Docker, Kubernetes를 관리</b>해 보며
            클라우드와 네트워크 통신에 큰 흥미를 느껴 수강하게 되었습니다.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
