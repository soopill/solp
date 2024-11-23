import { useState, useCallback } from "react";
import 문제들 from "../questions";

import 질문 from "./Question";
import 요약 from "./Summary";

export default function 퀴즈() {
  const [유저답, set유저답] = useState([]);

  const 현재질문위치 = 유저답.length;
  const 퀴즈완료여부 = 현재질문위치 === 문제들.length;

  const 답변선택처리 = useCallback(function 답변선택처리(답변선택) {
    set유저답((이전유저답) => {
      return [...이전유저답, 답변선택];
    });
  }, []);

  const 답변건너뛰기 = useCallback(() => {
    답변선택처리(null);
  }, [답변선택처리]);

  if (퀴즈완료여부) {
    return <요약 유저답={유저답} />;
  }

  return (
    <div id="quiz">
      <질문
        key={현재질문위치}
        질문위치={현재질문위치}
        답변선택시={답변선택처리}
        답변건너뛸시={답변건너뛰기}
      />
    </div>
  );
}
