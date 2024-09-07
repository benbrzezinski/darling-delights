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
import productsReducer from "./products/slice";

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
    products: productsPersistReducer,
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
