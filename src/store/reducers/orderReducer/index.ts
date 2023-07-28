import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { OrderDetailType } from '../../../shared/types/OrderDetailType';
import { OrderType } from '../../../shared/types/OrderType';

interface OrderState {
  orders: OrderType[];
  order: OrderDetailType | undefined;
}

const initialState: OrderState = {
  order: undefined,
  orders: [],
};

export const orderSlice = createSlice({
  name: 'orderReducer',
  initialState,
  reducers: {
    setOrdersAction: (state, action: PayloadAction<OrderType[]>) => {
      state.orders = action.payload;
    },
    setOrderByIdAction: (state, action: PayloadAction<OrderDetailType>) => {
      state.order = action.payload;
    },
  },
});

export const { setOrdersAction, setOrderByIdAction } = orderSlice.actions;

export default orderSlice.reducer;
