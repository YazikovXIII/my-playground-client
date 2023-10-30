import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Loader } from "./Loader";
import { Container, Main } from "./SharedLayout.styled";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { isLoading } from "../../redux/user/authSelectors";

export const SharedLayout = () => {
  const loading = useSelector(isLoading);
  return (
    <>
      {loading && <Loader />}
      <Header />
      <Main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
    </>
  );
};
