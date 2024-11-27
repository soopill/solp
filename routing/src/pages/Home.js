import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/product");
  }

  return (
    <>
      <h1>홈페이지</h1>
      <p>
        <Link to="/product">프로덕트로</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
