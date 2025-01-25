// Import React library and hooks
import React, { useEffect, useState } from "react";
// Import Link, useNavigate, and useParams from react-router-dom for navigation and URL parameters
import { Link, useNavigate, useParams } from "react-router-dom";
// Import appwriteService to handle Appwrite-related operations
import appwriteService from "../appwrite/Config";
// Import Button and Container components
import { Button, Container } from "../Components";
// Import parse function from html-react-parser to parse HTML content
import parse from "html-react-parser";
// Import useSelector hook from react-redux to access the Redux store state
import { useSelector } from "react-redux";

// Define the Post functional component
export default function Post() {
    // Define state for the post using useState hook
    const [post, setPost] = useState(null);
    // Get the slug parameter from the URL using useParams hook
    const { slug } = useParams();
    // Get the navigate function from useNavigate hook
    const navigate = useNavigate();

    // Get the user data from the Redux store
    const userData = useSelector((state) => state.auth.userData);

    // Determine if the current user is the author of the post
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    // useEffect hook to fetch the post data when the component mounts or the slug changes
    useEffect(() => {
        if (slug) {
            // Fetch the post data using the slug
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post); // Set the post data if found
                else navigate("/"); // Navigate to the home page if the post is not found
            });
        } else navigate("/"); // Navigate to the home page if the slug is not provided
    }, [slug, navigate]);

    // Function to delete the post
    const deletePost = () => {
        // Delete the post using the post ID
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                // Delete the associated file if the post is successfully deleted
                appwriteService.deleteFile(post.featuredImage);
                navigate("/"); // Navigate to the home page after deletion
            }
        });
    };

    // Return the JSX for the post page
    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)} // Get the file preview for the featured image
                        alt={post.title} // Set the alt text to the post title
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)} {/* Parse and render the post content as HTML */}
                </div>
            </Container>
        </div>
    ) : null; // Return null if the post data is not available
}