import { TCategory } from "@customTypes/categories";
import { TError, TLoading } from "@customTypes/shared";
import { createSlice } from "@reduxjs/toolkit";
import getCategoriesThunk from "./thunk/categoriesThunk";

interface ICategories {
    records: TCategory[];
    loading: TLoading;
    error: TError;
}

const initialState: ICategories = {
    records: [],
    loading: "idle",
    error: null,
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategoriesThunk.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });

        builder.addCase(getCategoriesThunk.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.records = action.payload;
        });

        builder.addCase(getCategoriesThunk.rejected, (state, action) => {
            state.loading = "failed";
            if (action.payload && typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
    },
});

export { getCategoriesThunk };
export default categoriesSlice.reducer;
