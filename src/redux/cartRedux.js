import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products:[],
        quantity: 0,
        total: 0,
        isFetching: false
    },
    reducers: {
        addProduct:(state, action) => {
            const item = state.products.find(element => element._id === action.payload._id);
            if(!item) {
                state.quantity +=1;
                state.products.push(action.payload);
                state.total += action.payload.price * action.payload.quantity;
            } else {
                item.quantity+= action.payload.quantity;
                state.total += action.payload.price * action.payload.quantity;
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.products.find((item) => item._id === action.payload._id);
            item.quantity++;
            state.total += action.payload.price;
        },
        decrementQuantity: (state, action) => {
            const item = state.products.find((item) => item._id === action.payload._id);
            if (item.quantity === 1) {
                const index = state.products.findIndex((item) => item._id === action.payload._id);
                state.products.splice(index, 1);
                state.total -= action.payload.price * action.payload.quantity;
                state.quantity -=1;
            } else {
                item.quantity--;
                state.total -= action.payload.price;
            }
        },
        deleteProduct: (state, action) => {
            state.quantity -=1;
            state.products.splice(state.products.findIndex((item) => item._id === action.payload._id), 1);
            state.total -= action.payload.price * action.payload.quantity;
        },
       
    }
});

export const { addProduct, deleteProduct, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;