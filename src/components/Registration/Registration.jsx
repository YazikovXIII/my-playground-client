import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { signUp } from "../../redux/user/authOperations";
import { useNavigate } from "react-router-dom";
import "./Registration_styled.scss";

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        navigate("/login");
      } catch (error) {
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
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Password"
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};
