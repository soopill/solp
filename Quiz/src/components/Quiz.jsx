import { useState, useCallback } from "react";
import 문제들 from "../questions";
import 질문제한시간 from "./QuestionTimer";
import 퀴즈완료이미지 from "../assets/quiz-complete.png";

export default function 퀴즈() {
  const [답변여부, set답변여부] = useState("");
  const [유저답, set유저답] = useState([]);
  const 현재질문위치 = 답변여부 === "" ? 유저답.length : 유저답.length - 1;
  const 퀴즈완료여부 = 현재질문위치 === 문제들.length;

  const 답변선택처리 = useCallback(function 답변선택처리(답변선택) {
    set답변여부("답변완료");
    set유저답((이전유저답) => {
      return [...이전유저답, 답변선택];
    });

    setTimeout(() => {
      if (답변선택 === 문제들[현재질문위치].answers[0]) {
        set답변여부("정답");
      } else {
        set답변여부("오답");
      }

      setTimeout(() => {
        set답변여부("");
      }, 2000);
    }, 1000);
  }, []);

  const 답변건너뛰기 = useCallback(() => {
    답변선택처리(null);
  }, [답변선택처리]);

  if (퀴즈완료여부) {
    return (
      <div id="summary">
        <img src={퀴즈완료이미지} alt="트로피 아이콘" />
        <h2>퀴즈 종료</h2>
      </div>
    );
  }
  const 답변섞기 = [...문제들[현재질문위치].answers];
  답변섞기.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <질문제한시간
          key={현재질문위치}
          제한시간={10000}
          제한시간초과={답변건너뛰기}
        />
        <h2>{문제들[현재질문위치].text}</h2>
        <ul id="answers">
          {답변섞기.map((answer) => {
            const 선택여부 = 유저답[유저답.length - 1] === answer;
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
                  onClick={() => 답변선택처리(answer)}
                  className={cssClass}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
