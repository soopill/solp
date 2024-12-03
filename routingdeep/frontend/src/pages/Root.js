import { Outlet } from "react-router-dom";
import MainNavigation from "./../components/MainNavigation";

function RootLayout() {
  // const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && <p>로딩중</p>} */}
        <Outlet />
      </main>
    </>
  );
}
export default RootLayout;
