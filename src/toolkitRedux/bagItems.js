import { createSlice,current } from "@reduxjs/toolkit";



const bagItems =createSlice({
    name: 'bagItems',

    initialState:{
        price : 0,
        items : [],
        count:0
    },
    reducers:{
        addTobag(state,action) {
            state.items.push(action.payload);
            state.count = state.count+1;
            
        },
        removeFrombag(state, action) {
            state.items.splice(action.payload,1);
            if(state.count!=0){
            state.count = state.count-1;
            }
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
            state.count = 0
        },
    }
})

export default bagItems.reducer

export const { addTobag ,addToprice,removeFrombag,clearItems,removePriceFrombag} = bagItems.actions