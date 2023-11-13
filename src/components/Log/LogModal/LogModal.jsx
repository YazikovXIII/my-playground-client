import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { addPost } from "../../../redux/posts/postsOperations";
import "./LogModal.scss";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export const LogModal = ({ toogleModal }) => {
  const PostSchema = Yup.object().shape({
    postThumb: Yup.mixed().required("File is required"),
    header: Yup.string().required("Title is required"),
    text: Yup.string().required("Text is required"),
  });

  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();
      formData.append("postThumb", values.postThumb);
      formData.append("header", values.header);
      formData.append("text", values.text);

      const response = await dispatch(addPost(formData));

      if (response.error) {
        const error = new Error(response.payload.data.message);
        error.status = response.status;
        throw error;
      }
      toast.success("Posted", {
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
    }
  };

  return (
    <div className="add_post_modal">
      <div className="modal_wrapper">
        <button type="button" onClick={toogleModal} className="close_modal_button">
          ×
        </button>
        <div className="wrapper">
          <Formik
            initialValues={{
              postThumb: null,
              header: "",
              text: "",
            }}
            validationSchema={PostSchema}
            onSubmit={async (values, { resetForm }) => {
              await handleSubmit(values);
              resetForm();
              document.querySelector('.form_input[type="file"]').value = null;
              toogleModal();
            }}
          >
            {({ setFieldValue }) => (
              <Form className="form_wrapper">
                <input
                  className="form_input"
                  name="postThumb"
                  type="file"
                  onChange={(event) => {
                    setFieldValue("postThumb", event.currentTarget.files[0]);
                  }}
                />
                <Field name="header" type="text" placeholder="Title" className="form_input" />
                <Field name="text" as="textarea" placeholder="Text" className="form_input textarea" />

                <button type="submit" className="post_form_submit_button">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
