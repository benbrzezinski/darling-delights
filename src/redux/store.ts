import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/slice";
import productsReducer from "./products/slice";
import filtersReducer from "./filters/slice";
import pageReducer from "./page/slice";

const productsPersistConfig = {
  key: "products",
  storage,
  whitelist: ["basket", "favourites"],
};

const productsPersistReducer = persistReducer(
  productsPersistConfig,
  productsReducer
);

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsPersistReducer,
    filters: filtersReducer,
    page: pageReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export default { store, persistor };
