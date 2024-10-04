import React, { useState } from "react";
import Star from "./Star";
import { useDispatch } from "react-redux";
import { addPost } from "../../features/postSlice";
import { useSelector } from "react-redux";

const AddPost = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const titleRating = [
    "Excellent",
    "Very Good",
    "Fair",
    "Below Average",
    "Unsatisfactory",
  ];
  const [rate, setRate] = useState(0);
  const [form, setForm] = useState({
    customerName: "",
    comment: "",
    img: "",
    rating: rate,
  });

  const handleChange = (e) => {
    console.log("Before Functionality");
    let { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddPost = (e) => {
    e.preventDefault();
    console.log(e);
    dispatch(
      addPost({
        id: posts.length > 0 ? posts[posts.length - 1].id + 1 : 1,
        name: form.customerName,
        img: form.img,
        comment: form.comment,
        rating: rate,
        title: titleRating[rate],
      })
    );
  };
  return (
    <div className="add-edit-container" onSubmit={(e) => handleAddPost(e)}>
      <form className="add-edit-form  highlight">
        <h2>Add Post</h2>
        <div className="form-group">
          <label htmlFor="name">Customer Name</label>
          <input
            type="text"
            name="customerName"
            value={form.customerName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image upload">Upload Image</label>
          <input
            type="text"
            name="img"
            value={form.img}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="review">Review</label>
          <textarea
            type="text"
            name="comment"
            value={form.comment}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <Star rate={rate} setRate={setRate}></Star>
        </div>
        <div className="form-group">
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
