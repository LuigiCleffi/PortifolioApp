import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import {
  portifolioData as portfolioData,
  type PortifolioData,
  type PortifolioPayload,
} from "../../mock";

const initialState = {
  portifolio: portfolioData,
};

const portifolio = createSlice({
  name: "portifolio",
  initialState,
  reducers: {
    addAction: (state, { payload }: PayloadAction<PortifolioPayload>) => {
      state.portifolio.push({ id: uuid(), ...payload });
    },
    editAction: (state, { payload }: PayloadAction<PortifolioData>) => {
      const index = state.portifolio.findIndex((el) => el.id === payload.id);
      if (index !== -1) {
        state.portifolio[index] = { ...state.portifolio[index], ...payload };
      }
    },

    deleteAction: (state, { payload }: PayloadAction<string>) => {
      const index = state.portifolio.findIndex((el) => el.id === payload);
      if (index !== -1) {
        state.portifolio.splice(index, 1);
      }
    },
  },
});

export const { addAction, editAction, deleteAction } = portifolio.actions;

export default portifolio.reducer;
