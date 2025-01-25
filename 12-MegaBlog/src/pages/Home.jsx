// Import React library and hooks
import React, { useEffect, useState } from 'react'
// Import appwriteService to handle Appwrite-related operations
import appwriteService from '../appwrite/Config'
// Import Container and PostCard components
import { Container, PostCard } from '../Components'

// Define the Home functional component
function Home() {
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
  
    // If there are no posts, display a message prompting the user to log in
    if (posts.length === 0) {
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'>
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    
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

// Export the Home component as the default export
export default Home