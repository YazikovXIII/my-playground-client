import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../redux/posts/postsOperations";
import { selectPosts } from "../../redux/posts/postsSelector";
import { PostItem } from "./LogListItem/LogListItem";

export const LogComp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  const posts = useSelector(selectPosts);

  return (
    <div className="log_wrapper">
      <h2>log posts will list here</h2>
      <ul>
        {posts.map((post) => (
          <PostItem key={post._id} imgURL={post.imgURL} header={post.header} text={post.text} />
        ))}
      </ul>
    </div>
  );
};
