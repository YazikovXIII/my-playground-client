// import { useDispatch, useSelector } from "react-redux";
// import { selectPostsOfUser } from "../../../redux/posts/postsSelector";
// import { useEffect, useState } from "react";
// import { getUsersPosts, removeUsersPost } from "../../../redux/posts/postsOperations";
// import "./LogManagerComp.scss";
// import { useNavigate } from "react-router-dom";
// import ReactDOM from "react-dom";
// import { LogManagerModal } from "./LogManagerModal/LogManagerModal";

// export const LogManagerComp = () => {
//   const [isModal, setIsModal] = useState(false);

//   const toogleModal = () => {
//     setIsModal(!isModal);
//   };

//   const navigate = useNavigate();
//   const usersPosts = useSelector(selectPostsOfUser);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getUsersPosts());
//   }, [dispatch]);

//   const removePost = async (id) => {
//     await dispatch(removeUsersPost(id));
//   };

//   const backTo = () => {
//     navigate("/log");
//   };

//   return (
//     <div className="list_wrapper">
//       <button
//         type="button"
//         className="back_button"
//         onClick={() => {
//           backTo();
//         }}
//       >
//         Back to LOG
//       </button>
//       <ul className="users_posts_list">
//         {usersPosts.map((post) => (
//           <li key={post._id}>
//             <div className="inner_wrapper">
//               <h3>{post.header}</h3>
//               <p className="item_text">{post.text}</p>
//             </div>
//             <button className="users_posts__delete_button" onClick={() => removePost(post._id)}>
//               Delete post
//             </button>
//             <button
//               onClick={() => {
//                 toogleModal();
//               }}
//             >
//               Edit Post
//             </button>
//             {isModal === true &&
//               ReactDOM.createPortal(<LogManagerModal toogleModal={toogleModal} post={post} />, document.getElementById("modal-root"))}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

import { useDispatch, useSelector } from "react-redux";
import { selectPostsOfUser } from "../../../redux/posts/postsSelector";
import { useEffect, useState } from "react";
import { getUsersPosts, removeUsersPost } from "../../../redux/posts/postsOperations";
import "./LogManagerComp.scss";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import { LogManagerModal } from "./LogManagerModal/LogManagerModal";

export const LogManagerComp = () => {
  const [isModal, setIsModal] = useState(false);
  const [currentPost, setCurrentPost] = useState(null); // Додано стан для поточного поста

  const toogleModal = (post) => {
    setCurrentPost(post); // Зберігаємо поточний пост
    setIsModal(!isModal);
  };

  const navigate = useNavigate();
  const usersPosts = useSelector(selectPostsOfUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersPosts());
  }, [dispatch]);

  const removePost = async (id) => {
    await dispatch(removeUsersPost(id));
  };

  const backTo = () => {
    navigate("/log");
  };

  return (
    <div className="list_wrapper">
      <button type="button" className="back_button" onClick={backTo}>
        Back to LOG
      </button>
      <ul className="users_posts_list">
        {usersPosts.map((post) => (
          <li key={post._id}>
            <div className="inner_wrapper">
              <h3>{post.header}</h3>
              <p className="item_text">{post.text}</p>
            </div>
            <div className="buttons_wrapper">
              <button className="users_posts__delete_button" onClick={() => removePost(post._id)}>
                Delete post
              </button>
              <button className="users_posts__delete_button" onClick={() => toogleModal(post)}>
                Edit Post
              </button>
            </div>
          </li>
        ))}
      </ul>
      {isModal &&
        currentPost &&
        ReactDOM.createPortal(<LogManagerModal toogleModal={toogleModal} post={currentPost} />, document.getElementById("modal-root"))}
    </div>
  );
};
