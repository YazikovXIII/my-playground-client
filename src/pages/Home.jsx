import { useSelector } from "react-redux";
import { Description } from "../components/Description/Description";
import { getUser } from "../redux/user/authSelectors";

export const Home = () => {
  const user = useSelector(getUser);
  console.log("user", user);

  const username = user.email.split("@")[0];
  const header = "This page is a playgound";
  const text = "I'm using it for learning more about React.js, React-Redux, Redux-toolkit, Node.js etc...";
  return (
    <div style={{ paddingTop: "100px", height: "calc(100vh - 100px)" }}>
      {username.length > 0 && <h2>Hello {username}</h2>}
      <Description headertext={header} partext={text} />
    </div>
  );
};
