// Import React library and hooks
import React, { useEffect, useState } from "react"
// Import Container and PostForm components
import { Container, PostForm } from "../Components"
// Import appwriteService to handle Appwrite-related operations
import appwriteService from "../appwrite/Config"
// Import useParams and useNavigate from react-router-dom for navigation and URL parameters
import { useParams, useNavigate } from "react-router-dom"

// Define the EditPost functional component
function EditPost() {
    // Define state for the post using useState hook
    const [post, setPost] = useState(null)
    // Get the slug parameter from the URL using useParams hook
    const { slug } = useParams()
    // Get the navigate function from useNavigate hook
    const navigate = useNavigate()

    // useEffect hook to fetch the post data when the component mounts or the slug changes
    useEffect(() => {
        if (slug) {
            // Fetch the post data using the slug
            appwriteService.getPost(slug)
            .then((post) => {
                if (post) {
                    // Set the post data if found
                    setPost(post)
                }
            })
        } else {
            // Navigate to the home page if the slug is not provided
            navigate('/')
        }
    }, [slug, navigate])

    // Return the JSX for the edit post page
    return (
        <Container>
            {post && <PostForm post={post} />} {/* Render the PostForm component if the post data is available */}
        </Container>
    )
}

// Export the EditPost component as the default export
export default EditPost