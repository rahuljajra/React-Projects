import { createSlice } from "@reduxjs/toolkit";

const appSlice =  createSlice({
    name: "app",
    initialState: {
        isOpenMenu : true,
    },
    reducers: {
        toggleMenu : (state) => {
            state.isOpenMenu = !state.isOpenMenu;
        }
    }
})

export const {toggleMenu} = appSlice.actions
export default appSlice.reducer;