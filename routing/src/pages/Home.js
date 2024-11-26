import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>홈페이지</h1>
      <p>
        <Link to="/product">프로덕트로</Link>
      </p>
    </>
  );
}

export default HomePage;
