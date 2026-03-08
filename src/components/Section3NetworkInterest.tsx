"use client";

import { Cloud, ShieldCheck, Globe, Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Section3NetworkInterest() {
  const interests = [
    {
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      title: "최신 웹 통신 프로토콜",
      desc: "프론트엔드 환경에서 화면을 그리는 것을 넘어, 데이터가 브라우저까지 빠르고 안정적으로 전달되는 과정(HTTP/3, WebSocket 등)을 탐구하고 싶습니다.",
      color: "border-blue-500/20 bg-blue-500/5",
    },
    {
      icon: <Gamepad2 className="w-6 h-6 text-emerald-500" />,
      title: "게임 서버와 실시간 동기화",
      desc: "다수의 클라이언트가 지연(Latency) 없이 상태를 공유해야 하는 게임 환경에서, UDP/TCP 기반의 빠르고 정확한 소켓 통신 원리에 흥미가 있습니다.",
      color: "border-emerald-500/20 bg-emerald-500/5",
    },
    {
      icon: <Cloud className="w-6 h-6 text-orange-500" />,
      title: "클라우드 네트워크 아키텍처",
      desc: "GCP, Docker, Kubernetes 등 클라우드 인프라를 경험해 보며, 컨테이너 간의 통신과 외부 트래픽 라우팅이 어떻게 이루어지는지 알아가고 싶습니다.",
      color: "border-orange-500/20 bg-orange-500/5",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-purple-500" />,
      title: "네트워크 보안과 데이터 보호",
      desc: "지속적으로 발생하는 보안 이슈들을 보며, 안전한 서비스를 구축하기 위한 암호화 통신(TLS/SSL)과 네트워크 방어 기법의 기초를 배우고 싶습니다.",
      color: "border-purple-500/20 bg-purple-500/5",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-full max-w-4xl mx-auto px-6 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="space-y-4 text-center mb-12"
      >
        <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-blue-500">
          Fields of Interest
        </h2>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          현재 관심있는 네트워크 분야
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {interests.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            viewport={{ once: false }}
            className={`flex flex-col p-6 rounded-2xl border ${item.color} backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-100 dark:border-zinc-800">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-200">
                {item.title}
              </h3>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
