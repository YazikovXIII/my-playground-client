import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Loader } from "./Loader";
import { Container, Main } from "./SharedLayout.styled";
import { Suspense } from "react";

export const SharedLayout = () => {
  return (
    <>
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
