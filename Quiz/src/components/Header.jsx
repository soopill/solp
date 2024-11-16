import logoImg from "../assets/quiz-logo.png";
export default function 헤더() {
  return (
    <header>
      <img src={logoImg} alt="퀴즈로고" />
      <h1>리액트퀴즈</h1>
    </header>
  );
}
