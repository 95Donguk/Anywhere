import axios from "axios";
import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

const initialState = [
    {
      member_no: "1",
      member_email: "123@123.com",
      isHost: false,
      member_pwd: "1",
      member_name: "firstman",
      member_phone_num: "000-0000-0000",
      member_img_path: "",
      member_status: "", 
      on: false,
    },
    {
      member_no: "2",
      member_email: "1",
      isHost: false,
      member_pwd: "1",
      member_name: "thus",
      member_phone_num: "000-0000-0000",
      member_img_path: "",
      member_status: "", 
      on: false,
    }
  ];

const UserSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        USER_SIGN_UP: (state, action) => {
            state.push(action.payload);
          },
          USER_LOG_IN: (state, action) => {
            const index = state.map((v) => v.member_email).indexOf(action.payload.member_email);
            state[index].on = true;
          },
          USER_LOG_OUT: (state, action) => {
            const index = state.map((v) => v.member_email).indexOf(action.payload.member_email);
            state[index].on = false;
          },
    }
})

export default UserSlice;