import { createSlice,current } from "@reduxjs/toolkit";



const bagItems =createSlice({
    name: 'bagItems',

    initialState:{
        price : 0,
        items : []
    },
    reducers:{
        addTobag(state,action) {
            state.items.push(action.payload);
        },
        removeFrombag(state, action) {
            const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
      }

          },
        addToprice(state,action){
            state.price = state.price + action.payload 
        },
        clearItems(state) {
            state.items = [];
            state.price = 0;
        },
    }
})

export default bagItems.reducer

export const { addTobag ,addToprice,removeFrombag,clearItems} = bagItems.actions