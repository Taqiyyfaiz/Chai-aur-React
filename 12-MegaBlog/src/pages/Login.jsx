// Import React library
import React from 'react'
// Import the login component from the Components directory
import { login as LoginComponent } from '../Components'

// Define the Login functional component
function Login() {
  // Return the JSX for the login page
  return (
    <div className='py-8'> {/* Add padding to the top and bottom */}
        <LoginComponent /> {/* Render the LoginComponent to handle the login form */}
    </div>
  )
}

// Export the Login component as the default export
export default Login