import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { signUp } from "../../redux/user/authOperations";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Registration_styled.scss";
import { useState } from "react";
import { IconHidden, IconShown } from "../Login/Show_hide_icon";

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await dispatch(signUp(values));
        if (response.error) {
          const error = new Error(response.payload.data.message);
          error.status = response.status;
          throw error;
        }
        toast.success("Done!Check your email for verification", {
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
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } catch (error) {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 6000,
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
      <form className="registration_form" onSubmit={formik.handleSubmit}>
        <h2>Registration</h2>
        <input id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.name} placeholder="Name" />
        <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
          placeholder="Username"
        />
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

        <button type="submit">Sign up</button>
        <ToastContainer />
      </form>
    </div>
  );
};
