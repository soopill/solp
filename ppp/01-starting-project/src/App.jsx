import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000, //초기투자
    annualInvestment: 1200, //연간투자
    expectedReturn: 6, //예상수익률
    duration: 10, //지속시간
  });
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIdentifier]: newValue };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} />;
    </>
  );
}

export default App;
