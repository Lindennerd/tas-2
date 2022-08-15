import { createSlice } from "@reduxjs/toolkit";

export const assetsSlice = createSlice({
  name: "assets",
  initialState: {} as any,
  reducers: {},
});

export const { actions } = assetsSlice;
export default assetsSlice.reducer;
