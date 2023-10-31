import { useSelector } from "react-redux";
import { Description } from "../components/Description/Description";
import { getUser } from "../redux/user/authSelectors";

export const Home = () => {
  const user = useSelector(getUser);
  let username = user.username;

  const header = "This page is a playgound";
  const text = "I'm using it for learning more about React.js, React-Redux, Redux-toolkit, Node.js etc...";
  return <Description username={username} headertext={header} partext={text} />;
};
