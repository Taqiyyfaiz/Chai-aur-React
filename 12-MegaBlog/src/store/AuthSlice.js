// we will create a store which will track our authentications.
// Import the createSlice function from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the authentication slice
const initialState = { // for slice we need initial state
    status: false, // Initial authentication status is false (not logged in)
    userData: null // Initial user data is null (no user data)
}

// Create a slice for authentication with a name, initial state, and reducers
const authSlice = createSlice({
    name: "auth", // Name of the slice
    initialState, // Initial state for the slice
    reducers: {
        // Reducer to handle login action
        login: (state, action) => {
            state.status = true; // Set the authentication status to true (logged in)
            state.userData = action.payload.userData; // Set the user data from the action payload
        },
        // Reducer to handle logout action
        logout: (state) => {
            state.status = false; // Set the authentication status to false (logged out)
            state.userData = null; // Clear the user data
        } 
    }
})

// Export the login and logout actions
export const { login, logout } = authSlice.actions;

// Export the authentication slice reducer as the default export
export default authSlice.reducer;