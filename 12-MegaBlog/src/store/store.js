// Import the configureStore function from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit'
import authSlice from './AuthSlice'

// Create a Redux store using the configureStore function
const store = configureStore({
    reducer: {
        auth : authSlice,
        // Add your slice reducers here
        // Example: auth: authSlice.reducer
    }
})

// Export the store as the default export
export default store;