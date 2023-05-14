import { createSlice } from "@reduxjs/toolkit"

const initialState =[{
    room_no:1,
    room_type_no:"",
    city_no:"",
    host_member_no:1,
    room_name:"",
    room_address_:"",
    room_price:0,
    room_description:"",
    room_bedroom:0,
    room_beds:0,
    room_check_in_time:"",
    room_check_out_time:"",
    room_status:false,
    created_at:"",
    updated_at:"",
    deleted_at:"",
}
]
const RoomSlice=createSlice({
    name:"room",
    initialState,
    reducers:{
    ROOM_POST: (state, action) => {
        state.push(action.payload);
      },
    }
})

export default RoomSlice;