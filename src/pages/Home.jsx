import { Description } from "../components/Description/Description";

export const Home = () => {
  const header = "This page is a playgound";
  const text =
    "I'm using it for learning more about React.js, React-Redux, Redux-toolkit, Node.js etc...";
  return <Description headertext={header} partext={text} />;
};
