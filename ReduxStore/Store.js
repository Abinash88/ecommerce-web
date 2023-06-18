import { configureStore } from "@reduxjs/toolkit";
import InitialToggle from './ToggleSlice'
import updateSlice from "./updateSlice";
import LogOutSlice  from "./LogoutSlice";
import BuyersSlice from './FetchProductsSlice'
import UserSlice from "./UserSlice";
import ProductSlice from "./ProductDataSlice";

const store = configureStore({
    reducer:{
        user:UserSlice,
        toggle:InitialToggle,
        productDatas:ProductSlice,
        update:updateSlice,
        logout:LogOutSlice,
        buyersProduct:BuyersSlice
    }
})

export default store;