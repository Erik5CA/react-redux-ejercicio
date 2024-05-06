import { configureStore } from "@reduxjs/toolkit";
import { candidatosSlice } from "./candidatosSlice";

export default configureStore({
  reducer: {
    candidatos: candidatosSlice.reducer,
  },
});
