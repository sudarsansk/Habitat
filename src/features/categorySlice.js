import { createSlice } from "@reduxjs/toolkit";
import * as MiIcon from "react-icons/md";
import * as TiIcon from "react-icons/ti";

const initialState = [
  { Break: { icon: <MiIcon.MdFreeBreakfast />, color: "#c5c1ea" } },
  { Library: { icon: <MiIcon.MdLocalLibrary />, color: "#FFC6C6" } },
  { Sports: { icon: <MiIcon.MdOutlineSportsKabaddi />, color: "#956C77" } },
  { Travel: { icon: <MiIcon.MdDirectionsCar />, color: "#54869A" } },
  { Social: { icon: <TiIcon.TiSocialTwitter />, color: "#CCAC73" } },
];

const categorySlice = createSlice({
  name: "Categories",
  initialState,
  reducers: {},
});

export default categorySlice.reducer;
