import { useRef } from "react";

export default function 답변({ answers, 답변선택, 답변여부, 선택시 }) {
  const 답변섞기 = useRef();
  if (!답변섞기.current) {
    답변섞기.current = [...answers];
    답변섞기.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {답변섞기.current.map((answer) => {
        const 선택여부 = 답변선택 === answer;
        let cssClass = "";

        if (답변여부 === "답변완료" && 선택여부) {
          cssClass = "선택됨";
        }
        if ((답변여부 === "정답" || 답변여부 === "오답") && 선택여부) {
          cssClass = 답변여부;
        }
        return (
          <li key={answer} className="answer">
            <button
              onClick={() => 선택시(answer)}
              className={cssClass}
              disabled={답변여부 !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
