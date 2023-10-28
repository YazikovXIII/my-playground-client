import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../redux/user/authOperations";
import { Loader } from "../components/SharedLayout/Loader";

export const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errorFromState = useSelector((state) => state.auth.user.error);

  function subHandler(e) {
    e.preventDefault();
    const values = { email, password };
    try {
      setIsloading(true);
      const response = dispatch(signUp(values));
      setIsloading(false);
      navigate("/login");
      return response;
    } catch (error) {
      console.log(errorFromState);
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
