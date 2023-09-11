import type { RootState } from "../store";

export const selectPortifolioData = (state: RootState) =>
  state.portifolioReducer.portifolio;
