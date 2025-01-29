// Import React library
import React from 'react'

// Import useDispatch hook from react-redux to dispatch actions
import { useDispatch } from 'react-redux'

// Import the authService to handle authentication-related operations
import authService from '../../appwrite/Auth'

// Import the logout action from the AuthSlice
import { logout } from '../../store/AuthSlice'

// Define the LogoutBtn functional component
function LogoutBtn() {
    // Get the dispatch function from useDispatch hook
    const dispatch = useDispatch()

    // Define the logoutHandler function to handle logout logic
    const logoutHandler = () => {
        // Call the logout method from authService
        authService.logout()
        .then(() => {
            // Dispatch the logout action to update the state
            dispatch(logout())
        })
    }

    // Return the JSX for the logout button
    return (
        <button 
            className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' 
            onClick={logoutHandler} // Attach the logoutHandler to the button's onClick event
        >
            Logout
        </button>
    )
}

// Export the LogoutBtn component as the default export
export default LogoutBtn