import { createSlice } from "@reduxjs/toolkit"

const orderSlice = createSlice({
    name: 'orderId',
    initialState: {
      orderId: '',
    },
    reducers: {
      setOrderId(state, action) {
        state.orderId = action.payload;
      },
    },
});

export const { setOrderId } = orderSlice.actions;

export default orderSlice.reducer