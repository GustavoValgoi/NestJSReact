import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from './reducers/categoryReducer';
import globalReducer from './reducers/globalReducer';
import productReducer from './reducers/productReducer';

const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    global: globalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
