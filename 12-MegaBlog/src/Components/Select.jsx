// Import React library and useId hook
import React, { useId } from 'react'

// Define the Select component using React.forwardRef to pass refs to the select element
function Select({
    options, // Array of options to be displayed in the select dropdown
    label, // Label text for the select field
    // better syntax 'classroom' ke andar empty strings ho (Assignment)
    className, // Additional custom classes for the select field
    ...props // Spread the rest of the props
}, ref) {
    // Generate a unique ID for the select field using useId hook
    const id = useId()
    
    // Return the JSX for the select component
    return (
        <div className='w-full'> {/* Container div with full width */}
            {/* Conditionally render the label if it is provided */}
            {label && <label htmlFor={id} className=''>{label}</label>}
            {/* Render the select field */}
            <select 
                {...props} // Spread the rest of the props onto the select element
                id={id} // Set the unique ID for the select element
                ref={ref} // Attach the ref to the select element
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} // Apply classes for styling
            >
                {/* Map through the options array and render each option */}
                {options?.map((option) => (
                    <option 
                        key={option} // Set a unique key for each option
                        value={option} // Set the value of the option
                    >
                        {option} // Display the option text
                    </option>
                ))}
            </select>
        </div>
    )
}

// Export the Select component using React.forwardRef to allow refs to be passed to the select element
export default React.forwardRef(Select)