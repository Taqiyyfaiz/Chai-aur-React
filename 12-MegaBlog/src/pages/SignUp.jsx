// Import React library
import React from 'react'
// Import the SignUp component from the Components directory
import { SignUp as SignupComponents } from '../Components'

// Define the SignUp functional component
function SignUp() {
  // Return the JSX for the sign-up page
  return (
    <div className='py-8'> {/* Add padding to the top and bottom */}
        <SignupComponents /> {/* Render the SignupComponents to handle the sign-up form */}
    </div>
  )
}

// Export the SignUp component as the default export
export default SignUp