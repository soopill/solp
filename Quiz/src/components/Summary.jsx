import 퀴즈완료이미지 from "../assets/quiz-complete.png";
import 문제들 from "../questions";

export default function 요약({ 유저답 }) {
  const 건너뛴답 = 유저답.filter((answer) => answer === null);
  const 정답 = 유저답.filter(
    (answer, index) => answer === 문제들[index].answers[0]
  );
  const 건너뛴비율 = Math.round((건너뛴답.length / 유저답.length) * 100);
  const 정답률 = Math.round((정답.length / 유저답.length) * 100);
  const 오답률 = 100 - 건너뛴비율 - 정답률;
  return (
    <div id="summary">
      <img src={퀴즈완료이미지} alt="트로피 아이콘" />
      <h2>퀴즈 종료</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{건너뛴비율}%</span>
          <span className="text">건너뜀</span>
        </p>
        <p>
          <span className="number">{정답률}%</span>
          <span className="text">정답</span>
        </p>
        <p>
          <span className="number">{오답률}%</span>
          <span className="text">오답</span>
        </p>
      </div>
      <ol>
        {유저답.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " 넘어감";
          } else if (answer === 문제들[index].answers[0]) {
            cssClass += " 정답";
          } else {
            cssClass += " 오답";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{문제들[index].text}</p>
              <p className={cssClass}>{answer ?? "선택하지않음"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
