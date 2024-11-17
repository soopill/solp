import { useEffect, useState } from "react";

export default function 질문제한시간({ 제한시간, 제한시간초과 }) {
  const [남은시간, set남은시간] = useState(제한시간);
  useEffect(() => {
    console.log("제한시간 설정");
    const timer = setTimeout(제한시간초과, 제한시간);
    return () => {
      clearTimeout(timer);
    };
  }, [제한시간, 제한시간초과]);

  useEffect(() => {
    console.log("시간간격 설정");
    const Interval = setInterval(() => {
      set남은시간((이전남은시간) => 이전남은시간 - 100);
    }, 100);
    return () => {
      clearInterval(Interval);
    };
  }, []);

  return <progress id="question-time" max={제한시간} value={남은시간} />;
}
