import { useState, useEffect } from "react";
import "./LogListItem.scss";

export const PostItem = ({ imgURL, header, text, owner }) => {
  const [isHorizontal, setIsHorizontal] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsHorizontal(img.width > img.height);
    };
    img.src = imgURL;
  }, [imgURL]);

  return isHorizontal ? (
    <li className="horizontal post_item">
      <img src={imgURL} alt={header} className="item_image" />
      <div className="post_text_content_wrapper">
        <h3>{header}</h3>
        <p>{text}</p>
        {owner && <p className="owner">posted by {owner}</p>}
      </div>
    </li>
  ) : (
    <li className="vertical post_item">
      <img src={imgURL} alt={header} className="item_image" />
      <div className="post_text_content_wrapper">
        <h3>{header}</h3>
        <p>{text}</p>
        {owner && <p className="owner">posted by {owner}</p>}
      </div>
    </li>
  );
};
