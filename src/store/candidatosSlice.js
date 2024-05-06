import { createSlice } from "@reduxjs/toolkit";

export const candidatosSlice = createSlice({
  name: "candidatos",
  initialState: {
    candidatos: [],
  },
  reducers: {
    addCandidatos: (state, action) => {
      state.candidatos.push(action.payload);
    },
    removeCandidato: (state, action) => {
      state.candidatos = state.candidatos.filter(
        (candidato) => candidato.id !== action.payload
      );
    },
    setMoveToSend: (state, action) => {
      state.candidatos = state.candidatos.map((candidato) => {
        if (candidato.id === action.payload.id) {
          candidato.moveToSend = action.payload.moveToSend;
        }
        return candidato;
      });
    },
  },
});

export const { addCandidatos, removeCandidato, setMoveToSend } =
  candidatosSlice.actions;
