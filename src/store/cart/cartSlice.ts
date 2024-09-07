import { TProduct } from "@customTypes/products";
import { createSlice } from "@reduxjs/toolkit";

interface ICart {
    items: { [key: number]: number };
    productsInfo: TProduct[];
}

const initialState: ICart = {
    items: {},
    productsInfo: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const id = action.payload;
            if (state.items[id]) {
                state.items[id]++;
            } else {
                state.items[id] = 1;
            }
        },
    },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
