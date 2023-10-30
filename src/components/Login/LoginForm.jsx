import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/user/authOperations";
import { getUser } from "../../redux/user/authSelectors";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(getUser);

  async function subHandler(e) {
    e.preventDefault();
    const values = { email, password };
    try {
      const response = await dispatch(logIn(values));
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
  return (
    <>
      <div>Login page</div>
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
