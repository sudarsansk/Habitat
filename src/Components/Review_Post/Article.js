import React from "react";
import Images from "../../img/customer.jpeg";

const Article = ({ post, curSlide, index }) => {
  return (
    <article
      key={post.id}
      className="article highlight"
      style={{ transform: `translateX(${150 * (index - curSlide)}%)` }}
    >
      <img src={Images} alt="customer" className="post_img" />
      <p className="comment">
        {post.comment.length > 110
          ? `${post.comment.slice(0, 110)} ...`
          : post.comment}
      </p>
      <div>
        <span style={{ fontWeight: "700", marginBottom: "0.5rem" }}>
          {post.name}
        </span>
        <div className="rating">
          {Array.from({ length: post.rating }, (_, index) => (
            <span key={index}> &#9733;</span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Article;
