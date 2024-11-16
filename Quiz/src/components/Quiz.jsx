import { useState } from "react";
import 질문들 from "../questions";
import 퀴즈완료이미지 from "../assets/quiz-complete.png";

export default function 퀴즈() {
  const [유저답, set유저답] = useState([]);
  const 현재질문위치 = 유저답.length;

  const 퀴즈완료여부 = 현재질문위치 === 질문들.length;

  function 답변선택핸들러(답변선택) {
    set유저답((이전유저답) => {
      return [...이전유저답, 답변선택];
    });
  }

  if (퀴즈완료여부) {
    return (
      <div id="summary">
        <img src={퀴즈완료이미지} alt="트로피 아이콘" />
        <h2>퀴즈 종료</h2>
      </div>
    );
  }
  const 답변섞기 = [...질문들[현재질문위치].answers];
  답변섞기.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{질문들[현재질문위치].text}</h2>
        <ul id="answers">
          {질문들[현재질문위치].answers.map((answers) => (
            <li key={answers} className="answer">
              <button onClick={() => 답변선택핸들러(answers)}>{answers}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
