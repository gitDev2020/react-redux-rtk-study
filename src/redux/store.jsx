import { configureStore } from '@reduxjs/toolkit';
// Импортируем ваши старые редюсеры (они полностью совместимы с RTK!)
import productPageReducer from './productPageReducer';
import homePageReducer from './homePageReducer';
import catalogPageReducer from './catalogPageReducer';

const store = configureStore({
  reducer: {
    productPage: productPageReducer,
    catalogPage: catalogPageReducer,
    homePage: homePageReducer,
  },
});

export default store;