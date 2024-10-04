import React, { useState } from "react";
import ReviewBar from "./ReviewBar";
import Article from "./Article";
import { useSelector } from "react-redux";

const Post = () => {
  const posts = useSelector((state) => state.posts);
  const [curSlide, setCurSlide] = useState(0);
  const ratings = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };

  const ratingCount = (
    posts
      .map((post) => post.rating)
      .reduce((acc, cur) => {
        return acc + cur;
      }, 0) / posts.length
  ).toFixed(1);

  posts.map((post) => {
    ratings[post.rating] = ratings[post.rating] + 1;
  });

  const prevSlide = () => {
    let slide = curSlide <= 0 ? posts.length - 1 : curSlide - 1;
    setCurSlide(slide);
  };
  const nextSlide = () => {
    let slide = curSlide >= posts.length - 1 ? 0 : curSlide + 1;
    setCurSlide(slide);
  };

  return (
    <div className="post-container flex-item">
      <div className="post_header highlight">
        <input type="search" className="search_bar" placeholder="Search Post" />
      </div>
      <div className="post_content">
        <div className="inner-container">
          <span className="colon top_colon">“</span>
          <i
            className="bi bi-caret-left-fill arrow left-arrow"
            onClick={() => prevSlide()}
          ></i>
          <i
            className="bi bi-caret-right-fill arrow right-arrow"
            onClick={() => nextSlide()}
          ></i>
          <div className="slide-article">
            {posts.map((post, index) => (
              <Article
                post={post}
                key={index}
                curSlide={curSlide}
                index={index}
              />
            ))}
          </div>
          <span className="colon bottom_colon">”</span>
        </div>

        <div className="post_review highlight">
          <div className="review_rating">
            <span style={{ fontSize: "2.5rem", fontWeight: "700" }}>
              {ratingCount}
            </span>
            <div className="star">
              <div
                className="inner_star"
                style={{ width: `${ratingCount * 20}%` }}
              ></div>
            </div>
          </div>
          <div className="review_bar">
            {Object.entries(ratings)
              .sort((a, b) => b[0] - a[0])
              .map(([star, count]) => (
                <ReviewBar
                  key={star}
                  count={count}
                  star={star}
                  total={posts.length}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
