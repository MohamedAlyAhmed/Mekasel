import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";

const getCartTotalQuantitySelector = createSelector(
    (state: RootState) => state.cart.items,
    (items) => {
        const totalItems = Object.values(items).reduce((acc, currentValue) => {
            return acc + currentValue;
        }, 0);
        return totalItems;
    }
);

export { getCartTotalQuantitySelector };
