import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../redux/user/authOperations";
import { Loader } from "../components/SharedLayout/Loader";
import { getUser } from "../redux/user/authSelectors";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(getUser);

  async function subHandler(e) {
    e.preventDefault();
    const values = { email, password };
    try {
      setIsloading(true);
      const response = await dispatch(logIn(values));
      console.log("Login.jsx-res", response);
      setIsloading(false);
      if (response.error) {
        const error = new Error(response.payload.data.message);
        error.status = response.status;
        throw error;
      }
      navigate("/");
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
      {user && user.email && <div>your id:{user.id}</div>}
    </>
  );
};
