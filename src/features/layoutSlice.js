import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskLayout: false,
  postLayout: false,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    postToggle: (state, action) => {
      state.postLayout = !action.payload;
    },
    taskToggle: (state, action) => {
      state.taskLayout = !action.payload;
    },
  },
});

export const { postToggle, taskToggle } = layoutSlice.actions;
export default layoutSlice.reducer;
