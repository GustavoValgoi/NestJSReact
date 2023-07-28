import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from './reducers/categoryReducer';
import globalReducer from './reducers/globalReducer';
import orderReducer from './reducers/orderReducer';
import productReducer from './reducers/productReducer';
import userReducer from './reducers/userReducer';

const store = configureStore({
  reducer: {
    category: categoryReducer,
    global: globalReducer,
    order: orderReducer,
    product: productReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
