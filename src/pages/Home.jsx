import { useSelector } from "react-redux";
import { Description } from "../components/Description/Description";
import { getUser, isLoggedIn } from "../redux/user/authSelectors";
import { HomeWrapper, StyledDetailsLink, StyledPhoto } from "./Home.styled";

export const Home = () => {
  const user = useSelector(getUser);
  const isUserLoggedIn = useSelector(isLoggedIn);
  let username = user.username;
  console.log(user, isUserLoggedIn);

  const headerUnauth = "Hello!";
  const textUnauth = "This page is my playground.Registrate a user and sign in to see more.";

  const headerIsAuth = `Hello, ${username}!`;
  const link = <StyledDetailsLink to="/about">here</StyledDetailsLink>;
  const textIsAuth = `My name is Vlad. I am a full-stack JavaScript developer seeking new professional opportunities. This page is my playground. I made this client to learn more about React.js, React-Redux, different libraries etc... Also I made a server on Node.js to work with this page. Github links and more details  `;

  return isUserLoggedIn ? (
    <HomeWrapper>
      <StyledPhoto src="/public_img/1.JPG" alt="My portrait"></StyledPhoto>
      <Description headertext={headerIsAuth} partext={textIsAuth} link={link} />
    </HomeWrapper>
  ) : (
    <Description headertext={headerUnauth} partext={textUnauth} />
  );
};
