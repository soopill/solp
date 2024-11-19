import 질문제한시간 from "./QuestionTimer";
import 답변 from "./Answers";
import { useState } from "react";
import 문제들 from "../questions";

export default function 질문({ 질문위치, 답변선택시, 답변건너뛸시 }) {
  const [answer, setAnswer] = useState({
    선택된답변: "",
    정답인지: null,
  });
  let timer = 10000;

  if (answer.선택된답변) {
    timer = 1000;
  }
  if (answer.정답인지 !== null) {
    timer = 2000;
  }
  function 답변선택처리(answer) {
    setAnswer({
      선택된답변: answer,
      정답인지: null,
    });

    setTimeout(() => {
      setAnswer({
        선택된답변: answer,
        정답인지: 문제들[질문위치].answers[0] === answer,
      });

      setTimeout(() => {
        답변선택시(answer);
      }, 2000);
    }, 1000);
  }

  let 답변여부 = "";

  if (answer.선택된답변 && answer.정답인지 !== null) {
    답변여부 = answer.정답인지 ? "정답" : "오답";
  } else if (answer.선택된답변) {
    답변여부 = "답변완료";
  }

  return (
    <div id="question">
      <질문제한시간
        key={timer}
        제한시간={timer}
        제한시간초과={answer.선택된답변 === "" ? 답변건너뛸시 : null}
        mode={답변여부}
      />
      <h2>{문제들[질문위치].text}</h2>
      <답변
        answers={문제들[질문위치].answers}
        답변선택={answer.선택된답변}
        답변여부={답변여부}
        선택시={답변선택처리}
      />
    </div>
  );
}
