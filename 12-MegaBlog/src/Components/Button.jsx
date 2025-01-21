// Import React library
import React from 'react'

// Define the Button functional component with destructured props
function Button({ 
    children, // The content inside the button
    type = 'button', // The type of the button, default is 'button'
    bgcolor = 'bg-blue-600', // Background color class, default is 'bg-blue-600'
    textColor = 'text-white', // Text color class, default is 'text-white'
    classname = '', // Additional custom classes, default is an empty string
    ...props // Spread the rest of the props
}) {
  // Return the JSX for the button
  return (
    <button 
      className={`px-4 py-2 rounded-lg ${bgcolor} ${textColor} ${classname}`} // Apply classes for styling
      type={type} // Set the button type
      {...props} // Spread the rest of the props onto the button
    >
      {children} // Render the content inside the button
    </button>
  )
}

// Forward Ref: example Interview Question in React
// we have login form inside login form we have input fields the same input filed we are using in username and password form so we need to use forward ref to get the same input field in both login form and username and password form

// Export the Button component as the default export
export default Button