import { createSlice,current } from "@reduxjs/toolkit";



const bagItems =createSlice({
    name: 'bagItems',

    initialState:{
        price : 0,
        items : [],
        colorBtn : false
    },
    reducers:{
        addTobag(state,action) {
            state.items.push(action.payload);
            
        },
        removeFrombag(state, action) {
            state.items.splice(action.payload,1);
          },
        
        removePriceFrombag(state,action){
            console.log(state.price)
            console.log(action.payload)
            state.price = state.price - Number(action.payload)
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

export const { addTobag ,addToprice,removeFrombag,clearItems,removePriceFrombag} = bagItems.actions