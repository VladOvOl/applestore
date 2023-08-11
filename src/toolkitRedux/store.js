import { combineReducers , configureStore} from "@reduxjs/toolkit";
import toolkitSlice from "./toolkitSlice";
import bagstoreToolkit from './storebagSlice';
import bagItemsSlice from "./bagItems";

const rootReducer = combineReducers({
    toolkit: toolkitSlice,
    bagstoreToolkit : bagstoreToolkit,
    bagItems : bagItemsSlice,
})

export const store = configureStore({
    reducer : rootReducer,
  

})