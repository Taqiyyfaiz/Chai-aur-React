// Import React library and hooks
import React, { useEffect, useState } from 'react'

// Import useSelector hook from react-redux to access the Redux store state
import { useSelector } from 'react-redux'

// Import useNavigate hook from react-router-dom for navigation
import { useNavigate } from 'react-router-dom'

// Define the Protected functional component
export default function Protected({ children, authentication = true }) {
    // Get the navigate function from useNavigate hook
    const navigate = useNavigate()
    
    // Define state for loader using useState hook
    const [loader, setLoader] = useState(true)
    
    // Get the authentication status from the Redux store
    const authStatus = useSelector(state => state.auth.authStatus)

    // useEffect hook to handle navigation based on authentication status
    useEffect(() => {
        // true && false !== true
        // Todo make it more easy

        // if (authStatus === true) {
        //     navigate("/")
        // } else if(authStatus === false) {
        //     navigate("/login")
        // }
        // If authentication is required and the user is not authenticated, navigate to the login page
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        // If authentication is not required and the user is authenticated, navigate to the home page
        } else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }
        // Set loader to false after checking authentication status
        setLoader(false)
    }, [authStatus, navigate, authentication])

    // Return a loading message while checking authentication status, otherwise render the children components
    return loader ? <h1>loading...</h1> : <>{children}</>
}