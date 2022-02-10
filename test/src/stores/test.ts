import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserState {
  name: string;
  email: string;
}

const initialState = {
  name: "",
  email: "",
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserState>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

export const { setUser } = user.actions;

export default user;
