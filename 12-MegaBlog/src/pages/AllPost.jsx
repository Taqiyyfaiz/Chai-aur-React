// Import React library and hooks
import React, { useState, useEffect } from 'react'
// Import appwriteService to handle Appwrite-related operations
import appwriteService from '../appwrite/Config'
// Import Container and PostCard components
import { Container, PostCard } from '../Components'

// Define the AllPost functional component
function AllPost() {
    // Define state for posts using useState hook
    const [posts, setPosts] = useState([])

    // useEffect hook to fetch posts when the component mounts
    useEffect(() => {
        // Fetch posts using appwriteService
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                // Set the posts state with the fetched documents
                setPosts(posts.documents)
            }
        })
    }, []) // Empty dependency array ensures this runs only once when the component mounts

    // Return the JSX for displaying the posts
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} /> {/* Render a PostCard for each post */}
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

// Export the AllPost component as the default export
export default AllPost