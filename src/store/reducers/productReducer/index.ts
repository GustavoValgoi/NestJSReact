import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProductType } from '../../../shared/types/ProductType';

interface ProductState {
  products: ProductType[];
}

const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    setProductsAction: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProductsAction } = productSlice.actions;

export default productSlice.reducer;
