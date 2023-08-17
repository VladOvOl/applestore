import { createSlice } from "@reduxjs/toolkit";


const toolkitSearch =createSlice({
    name: 'toolkitSeacrh',

    initialState:{
        inputText: '',
        arraySearch:[]
    },
    reducers:{
        changeInput(state,action) {
            state.inputText = action.payload
            console.log(state.inputText)
        },

        chooseLength(state,action){
            state.arraySearch=action.payload
            console.log(state.arraySearch)
        }
    }
})

export default toolkitSearch.reducer

export const { changeInput,chooseLength} = toolkitSearch.actions