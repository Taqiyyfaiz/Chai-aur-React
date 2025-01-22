// Import React library
import React from 'react'

// Import appwriteService to handle Appwrite-related operations
import appwriteService from '../appwrite/Config'

// Import Link component from react-router-dom for navigation
import { Link } from 'react-router-dom'

// Define the PostCard functional component
function PostCard({ $id, title, FeaturedImgae }) {
  return (
    // Create a link to the post detail page using the post ID
    <Link to={`/post/${$id}`}>
        {/* Container div for the post card with styling */}
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            {/* Container div for the image with styling */}
            <div className='w-full justify-center mb-4'>
                {/* Render the featured image using the Appwrite service to get the file preview */}
                <img src={appwriteService.getfilePreview(FeaturedImgae)} alt={title} className='rounded-xl' />
            </div>
            {/* Render the post title */}
            <h2 className='text-xl font-bold'>
                {title}
            </h2>
        </div>
    </Link>
  )
}

// Export the PostCard component as the default export
export default PostCard