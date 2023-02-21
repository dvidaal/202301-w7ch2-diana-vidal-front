import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "./types";

const initialState: UserState = {
  id: "",
  isLogged: false,
  token: "",
  username: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loginUser: (currenState, action: PayloadAction<User>) => ({
      ...action.payload,
      isLogged: true,
    }),
  },
});

export const userReducer = usersSlice.reducer;
export const { loginUser: loginUserActionCreator } = usersSlice.actions;
