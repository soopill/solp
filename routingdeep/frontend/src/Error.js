import { useRouteError } from "react-router-dom";
import PageContent from "./components/PageContent";
import MainNavigation from "./components/MainNavigation";
function ErrorPage() {
  const error = useRouteError();

  let title = "에러뜸";
  let message = "오류뜸";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }
  if (error.status === 404) {
    title = "페이지없음";
    message = "정보없음";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
export default ErrorPage;
