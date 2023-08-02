import { createSlice } from "@reduxjs/toolkit";


const toolkitSlice =createSlice({
    name: 'toolkit',

    initialState:{
        count:false
    },
    reducers:{
        change(state) {
            state.count = !state.count
            console.log(state.count)
        }
    }
})

export default toolkitSlice.reducer

export const { change} = toolkitSlice.actions