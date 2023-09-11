import { combineReducers } from "@reduxjs/toolkit";

import portifolioReducer from "./portifolio/slice";

const rootReducer = combineReducers({
  portifolioReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
