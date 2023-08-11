import { createSlice } from "@reduxjs/toolkit";


const storebagSlice =createSlice({
    name: 'bagstoreToolkit',

    initialState:{
        countBag:false
    },
    reducers:{
        changeBag(state) {
            state.countBag = !state.countBag
            console.log(state.countBag)
        }
    }
})

export default storebagSlice.reducer

export const { changeBag} = storebagSlice.actions