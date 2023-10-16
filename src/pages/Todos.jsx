import { Description } from "../components/Description/Description";

export const Todos = () => {
  const header = "Todos";
  const text = "Todos are in progress...";
  return <Description headertext={header} partext={text} />;
};
