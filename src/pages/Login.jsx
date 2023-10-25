import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function subHandler(e) {
    e.preventDefault();
    console.log(email, password);
  }
  return (
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
