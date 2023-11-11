import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../redux/posts/postsOperations";
import { selectPosts } from "../../redux/posts/postsSelector";
import { PostItem } from "./LogListItem/LogListItem";
import "./LogComp.scss";
import { NavLink } from "react-router-dom";
import ReactDOM from "react-dom";
import { LogModal } from "./LogModal/LogModal";

export const LogComp = () => {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);
  const posts = useSelector(selectPosts);
  const postsReversed = [...posts].reverse();

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  const toogleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <div className="log_wrapper">
      <div className="header_nav_wrapper">
        <h2>Posts</h2>
        <div className="actions_wrapper">
          <button type="button" onClick={toogleModal} className="add_new_button">
            Add post
          </button>
          <NavLink to="/log/management" className="nav_to_management">
            Manage your posts
          </NavLink>
        </div>
      </div>
      <ul>
        {postsReversed.map((post) => (
          <PostItem key={post._id} imgURL={post.imgURL} header={post.header} text={post.text} />
        ))}
      </ul>
      {isModal === true && ReactDOM.createPortal(<LogModal toogleModal={toogleModal} />, document.getElementById("modal-root"))}
    </div>
  );
};
