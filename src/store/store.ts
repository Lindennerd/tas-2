import { configureStore } from "@reduxjs/toolkit";
import assetsReducer from "./features/assets.slice";

export default configureStore({
  reducer: {
    assets: assetsReducer,
  },
});
