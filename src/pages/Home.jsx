import { useSelector } from "react-redux";
import { Description } from "../components/Description/Description";
import { getUser, isLoggedIn } from "../redux/user/authSelectors";
import { NavLink } from "react-router-dom";

export const Home = () => {
  const user = useSelector(getUser);
  const isUserLoggedIn = useSelector(isLoggedIn);
  let username = user.username;
  console.log(user, isUserLoggedIn);

  const headerUnauth = "Hello!";
  const textUnauth = "This page is my playground.Registrate a user and sign in to see more.";

  const headerIsAuth = `Hello, ${username}!`;
  const link = <NavLink to="/about">About</NavLink>;
  const textIsAuth = `My name is Vlad.I am a full-stack JavaScript developer seeking new professional opportunities.This page is my playground.I use it to learn more about React.js,React-Redux,Node.js etc...Check `;

  return isUserLoggedIn ? (
    <Description headertext={headerIsAuth} partext={textIsAuth} link={link} />
  ) : (
    <Description headertext={headerUnauth} partext={textUnauth} />
  );
};
