import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/user/authOperations";
import { Loader } from "../components/SharedLayout/Loader";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const dispatch = useDispatch();

  function subHandler() {
    const values = { email, password };
    try {
      setIsloading(true);
      const response = dispatch(logIn(values));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div style={{ paddingTop: "100px" }}>Login page</div>
      <form>
        <input id="email" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
        <input id="password" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" />
        <button type="submit" onClick={subHandler}>
          Log in
        </button>
      </form>
    </>
  );
};
