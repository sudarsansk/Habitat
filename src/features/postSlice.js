import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Sudarsan Kumaar",
    comment:
      "Nice and fast delivery within the promise time. The highlight is open delivery so we can cross check while delivery the product and no Plastic bags for packing.",
    rating: 5,
    datetime: "July 16, 2021",
    img: "Sample",
    title: "Excellent",
    reactions: {
      thumbsDown: 2,
      thumbsUp: 130,
      heart: 18,
    },
  },
  {
    id: 2,
    name: "Srenivasan K",
    comment:
      "Big is a heartwarming and timeless classic that tells the story of a young boy",
    rating: 4,
    datetime: "July 16, 2021",
    img: "Sample",
    title: "Very Good",
    reactions: {
      thumbsDown: 3,
      thumbsUp: 10,
      heart: 15,
    },
  },
  {
    id: 3,
    name: "Mathi Arasu S K",
    comment:
      "We are very pleased with the quality of the sugar we purchased from this seller. The service was also excellent, as they delivered the product on time . We highly recommend this seller to anyone looking for good quality sugar at a reasonable price.",
    rating: 5,
    datetime: "July 16, 2021",
    img: "Sample",
    title: "Excellant",
    reactions: {
      thumbsDown: 2,
      thumbsUp: 120,
      heart: 14,
    },
  },
  {
    id: 4,
    name: "Sudarsan Kumaar",
    comment: "Nice",
    rating: 2,
    datetime: "July 16, 2021",
    img: "Sample",
    title: "Below Average",
    reactions: {
      thumbsDown: 2,
      thumbsUp: 130,
      heart: 18,
    },
  },
  {
    id: 5,
    name: "Sudarsan Kumaar S J",
    comment:
      "Nice and fast delivery within the promise time. The highlight is open delivery so we can cross check while delivery the product and no Plastic bags for packing.",
    rating: 3,
    datetime: "July 16, 2021",
    img: "Sample",
    title: "Fair",
    reactions: {
      thumbsDown: 2,
      thumbsUp: 130,
      heart: 18,
    },
  },
];

const postSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {
    updateReaction: (state, action) => {
      const { reaction, postId } = action.payload;
      const currentPost = state.find((post) => post.id == postId);
      currentPost.reactions[reaction]++;
    },
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ id, name, img, comment, rating, title }) {
        return {
          payload: {
            id,
            name,
            comment,
            rating,
            datetime: "",
            img,
            title,
            reactions: {
              thumbsDown: 0,
              thumbsUp: 0,
              heart: 0,
            },
          },
        };
      },
    },
  },
});

export const { updateReaction, addPost } = postSlice.actions;
export default postSlice.reducer;
