import { createSlice } from "@reduxjs/toolkit";


const toolkitSlice =createSlice({
    name: 'toolkit',

    initialState:{
        countMenu:false
    },
    reducers:{
        changeMenu(state) {
            state.countMenu = !state.countMenu
            console.log(state.countMenu)
        }
    }
})

export default toolkitSlice.reducer

export const { changeMenu} = toolkitSlice.actions