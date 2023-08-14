import { combineReducers , configureStore} from "@reduxjs/toolkit";
import toolkitSlice from "./toolkitSlice";
import bagstoreToolkit from './storebagSlice';
import bagItemsSlice from "./bagItems";
import toolkitSearch from "./toolkitSearch";

const rootReducer = combineReducers({
    toolkit: toolkitSlice,
    bagstoreToolkit : bagstoreToolkit,
    bagItems : bagItemsSlice,
    toolkitSearch : toolkitSearch
})

export const store = configureStore({
    reducer : rootReducer,
  

})