import { createAsyncThunk } from "@reduxjs/toolkit";
import AppServices from "@services/AppServices";
import axios from "axios";

const getProductsByCatPrefix = createAsyncThunk(
    "products/getProductsByCatPrefix",
    async (prefix: string, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;

        try {
            const { data } = await AppServices.getProductsByCatPrefix(prefix);
            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(
                    error?.response?.data?.message || error?.message
                );
            } else {
                return rejectWithValue("An error occurred");
            }
        }
    }
);

export default getProductsByCatPrefix;
