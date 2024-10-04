import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateReaction } from "../../features/postSlice";
const AllPosts = () => {
  const posts = useSelector((state) => state.posts);
  const view = useSelector((state) => state.layout.postLayout)
    ? "list-view"
    : "grid-view";
  const commentLength = view == "grid-view" ? 100 : 20;
  const emojis = {
    thumbsDown: "👎",
    thumbsUp: "👍",
    heart: "❤️",
  };
  const dispatch = useDispatch();
  return (
    <div className="all-post-container">
      <div className={`all-posts ${view}`}>
        {posts.map((post) => (
          <article className={`highlight ${view}`} key={post.id}>
            <div className="items">
              <span>
                <span
                  className="ratings"
                  style={{
                    backgroundColor: `${
                      post.rating > 3
                        ? "rgb(27, 140, 27)"
                        : post.rating < 3
                        ? "#dd5c6b"
                        : "#feca2d"
                    }`,
                  }}
                >
                  {post.rating} &#9733;
                </span>
                <span style={{ fontWeight: 700, paddingLeft: "1rem" }}>
                  {post.title}
                </span>
              </span>
              <div className="date">{post.datetime}</div>
            </div>
            <div className="items content">
              {post.comment.length > commentLength
                ? `${post.comment.slice(0, commentLength)} ...`
                : post.comment}
            </div>
            <div className="items">
              <span className="name" style={{ fontWeight: 500 }}>
                {post.name}
              </span>
              <div className="reaction-content">
                {Object.entries(post.reactions).map(([reaction, count]) => (
                  <button
                    key={reaction}
                    onClick={() =>
                      dispatch(updateReaction({ reaction, postId: post.id }))
                    }
                    className="btn-reaction"
                  >
                    {emojis[reaction]} {count}
                  </button>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
