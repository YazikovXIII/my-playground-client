import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Loader } from "./Loader";
import { Container, Main } from "./SharedLayout.styled";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { isUserRefreshing } from "../../redux/user/authSelectors";
import { isTodosRefreshing } from "../../redux/todos/todosSelector";
import { selectPostsIsRefreshing } from "../../redux/posts/postsSelector";

export const SharedLayout = () => {
  const userRefreshing = useSelector(isUserRefreshing);
  const todosRefreshing = useSelector(isTodosRefreshing);
  const isPostsRefreshing = useSelector(selectPostsIsRefreshing);
  return (
    <>
      {(userRefreshing && <Loader />) || (todosRefreshing && <Loader />) || (isPostsRefreshing && <Loader />)}
      <Header />
      <Main>
        <Container className="Container">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
    </>
  );
};
