import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { editUsersPost, getAll } from "../../../../redux/posts/postsOperations";

export const LogManagerModal = ({ toogleModal, post }) => {
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
      const credentials = {
        _id: post._id,
        formData,
      };

      const response = await dispatch(editUsersPost(credentials));

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
              header: post.header,
              text: post.text,
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
                <ErrorMessage name="postThumb" component="div" className="error_message" />
                <Field name="header" type="text" placeholder="Title" className="form_input" />
                <ErrorMessage name="header" component="div" className="error_message_header" />
                <Field name="text" as="textarea" placeholder="Text" className="form_input textarea" />
                <ErrorMessage name="text" component="div" className="error_message_text" />

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
