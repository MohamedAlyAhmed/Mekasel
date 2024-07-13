import { TProduct } from "@customTypes/products";
import { TError, TLoading } from "@customTypes/shared";
import { createSlice } from "@reduxjs/toolkit";
import getProductsByCatPrefix from "./thunk/productsThunk";

interface IProducts {
    records: TProduct[];
    loading: TLoading;
    error: TError;
}

const initialState: IProducts = {
    records: [],
    loading: "idle",
    error: null,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        cleanUpProducts: (state) => {
            state.records = [];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProductsByCatPrefix.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });

        builder.addCase(getProductsByCatPrefix.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.records = action.payload;
        });

        builder.addCase(getProductsByCatPrefix.rejected, (state, action) => {
            state.loading = "failed";
            if (action.payload && typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
    },
});

export const { cleanUpProducts } = productsSlice.actions;
export { getProductsByCatPrefix };
export default productsSlice.reducer;
