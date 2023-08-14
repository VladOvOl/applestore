import { createSlice } from "@reduxjs/toolkit";


const toolkitSearch =createSlice({
    name: 'toolkitSeacrh',

    initialState:{
        inputText: '',
    },
    reducers:{
        changeInput(state,action) {
            state.inputText = action.payload
            console.log(state.inputText)
        }
    }
})

export default toolkitSearch.reducer

export const { changeInput} = toolkitSearch.actions