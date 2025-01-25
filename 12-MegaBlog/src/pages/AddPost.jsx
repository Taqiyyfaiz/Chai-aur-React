// Import React library
import React from 'react'
// Import Container and PostForm components
import { Container, PostForm } from '../Components'

// Define the AddPost functional component
function AddPost() {
  // Return the JSX for the add post page
  return (
    <div className='py-8'> {/* Add padding to the top and bottom */}
        <Container> {/* Use the Container component to center the content */}
            <PostForm /> {/* Render the PostForm component to handle the form for adding a new post */}
        </Container>
    </div>
  )
}

// Export the AddPost component as the default export
export default AddPost