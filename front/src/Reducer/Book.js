
import { createSlice } from '@reduxjs/toolkit';
const initialState =[ {
    booking_no:0,
    member_no:0,
    room_no:0,
    check_in:"",
    check_out:"",
    guests:0,
    booking_status:0,
    create_at:"",
    updated_at:"",
}
]
const BookSlice = createSlice({
    name:"book",
    initialState,
    reducers:{
        BOOK_POST: (state, action) => {
            state.push(action.payload);
          },
    }
})
export default BookSlice