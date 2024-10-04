import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/postSlice";
import layoutSlice from "../features/layoutSlice";
import categorySlice from "../features/categorySlice";

export const store = configureStore({
  reducer: {
    posts: postSlice,
    layout: layoutSlice,
    categories: categorySlice,
  },
});
