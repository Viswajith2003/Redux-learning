import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Reducer/reducer";

export default configureStore({
  reducer: {
    counter: counterSlice,
  },
});
