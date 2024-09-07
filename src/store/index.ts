import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import cart from "./cart/cartSlice";
import categories from "./categories/categoriesSlice";
import products from "./products/productsSlice";

const rootPersistConfig = {
    key: "root",
    storage,
    whiteList: ["categories"],
};

const cartPersistConfig = {
    key: "cart",
    storage,
    whiteList: ["items"],
};

const rootReducer = combineReducers({
    categories,
    products,
    cart: persistReducer(cartPersistConfig, cart),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REGISTER,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                ],
            },
        }),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { persistor, store };
