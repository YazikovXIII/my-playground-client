import { useDispatch, useSelector } from "react-redux";
import { selectPostsOfUser } from "../../../redux/posts/postsSelector";
import { useEffect } from "react";
import { getUsersPosts, removeUsersPost } from "../../../redux/posts/postsOperations";
import "./LogManagerComp.scss";
import { useNavigate } from "react-router-dom";

export const LogManagerComp = () => {
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
      <button
        type="button"
        className="back_button"
        onClick={() => {
          backTo();
        }}
      >
        Back to LOG
      </button>
      <ul className="users_posts_list">
        {usersPosts.map((post) => (
          <li key={post._id}>
            <div className="inner_wrapper">
              <h3>{post.header}</h3>
              <p className="item_text">{post.text}</p>
            </div>
            <button className="users_posts__delete_button" onClick={() => removePost(post._id)}>
              Delete post
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
