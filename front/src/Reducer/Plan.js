import { createSlice } from "@reduxjs/toolkit"

const initialState =[{
    city_no:0,
    room_no:0,
    room_type_no:0,
    host_member_no:0,
    booking_no:0,
    member_no:0,
}]

const PlanSlice=createSlice({
    name:"plan",
    initialState,
    reducers:{
        PLAN_POST: (state, action) => {
            state.push(action.payload);
          },
    }
})

export default PlanSlice;
// 사용자가 선택한 사용자 정보,숙소.장소,날짜 저장