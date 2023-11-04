// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { logIn } from "../../redux/user/authOperations";
// import { getUser } from "../../redux/user/authSelectors";
// import { useNavigate } from "react-router-dom";

// export const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const user = useSelector(getUser);

//   async function subHandler(e) {
//     e.preventDefault();
//     const values = { email, password };
//     try {
//       const response = await dispatch(logIn(values));
//       if (response.error) {
//         const error = new Error(response.payload.data.message);
//         error.status = response.status;
//         throw error;
//       }
//       navigate("/");
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   return (
//     <>
//       <div>Login page</div>
//       <form>
//         <input id="email" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
//         <input id="password" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" />
//         <button type="submit" onClick={subHandler}>
//           Log in
//         </button>
//       </form>
//       {user && user.email && <div>your id:{user.id}</div>}
//     </>
//   );
// };

import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { logIn } from "../../redux/user/authOperations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LoginForm_styles.scss";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IconHidden, IconShown } from "../Icons";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await dispatch(logIn(values));
        if (response.error) {
          const error = new Error(response.payload.data.message);
          error.status = response.status;
          throw error;
        }
        toast.success("You are logged in", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          closeButton: false,
        });
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } catch (error) {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          closeButton: false,
        });
        console.log(error);
      }
    },
  });

  return (
    <div className="form_wrapper">
      <form className="login_form" onSubmit={formik.handleSubmit}>
        <h2>Login</h2>
        <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} placeholder="Email" />
        <div className="password_wrapper">
          <input
            className="password_input"
            id="password"
            name="password"
            type={isVisible ? "text" : "password"}
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Password"
          />
          <button type="button" onClick={toggleVisibility} className="toggle-password">
            {isVisible ? <IconHidden /> : <IconShown />}
          </button>
        </div>

        <button type="submit">Log in</button>
        <ToastContainer />
      </form>
    </div>
  );
};
