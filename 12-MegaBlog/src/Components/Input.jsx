// Import React library and useId hook
import React, { useId } from 'react'

// Define the Input component using React.forwardRef to pass refs to the input element
const Input = React.forwardRef(function Input({
    label, // Label text for the input field
    type = 'text', // Type of the input field, default is 'text'
    className = '', // Additional custom classes for the input field, default is an empty string
    ...props // Spread the rest of the props
}, ref) {
    // Generate a unique ID for the input field using useId hook
    const id = useId()
    
    // Return the JSX for the input component
    return (
        <div className='w-full'> {/* Container div with full width */}
            {/* Conditionally render the label if it is provided */}
            {label && (
                <label className='inline-block mb-1 pl-1' htmlFor={id}>
                    {label} {/* Display the label text */}
                </label>
            )}
            {/* Render the input field */}
            <input 
                type={type} // Set the input type
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} // Apply classes for styling
                ref={ref} // Attach the ref to the input element
                {...props} // Spread the rest of the props onto the input element
                id={id} // Set the unique ID for the input element
            />
        </div>
    )
})

// Export the Input component as the default export
export default Input