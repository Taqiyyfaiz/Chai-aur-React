// Import configuration and necessary modules from Appwrite SDK
import conf from '../Conf/conf';
import { Client, ID, Databases, Storage, Query } from "appwrite";

// Define a Service class to interact with Appwrite services
export class Service {
    client = new Client(); // Initialize a new Appwrite client
    databases; // Placeholder for the database instance
    bucket; // Placeholder for the bucket instance

    // Constructor to set up the client, database, and bucket
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Set the Appwrite endpoint URL
            .setProject(conf.appwriteProjectId); // Set the Appwrite project ID
        this.databases = new Databases(this.client); // Initialize the database with the client
        this.bucket = new Storage(this.client); // Initialize the bucket with the client
    }

    // Method to create a new post
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            // Attempt to create a document in the database with the provided data
            return await this.databases.createDocument(
                conf.appwriteDatabaseId, // Database ID from configuration
                conf.appwriteCollectionId, // Collection ID from configuration
                slug, // Document ID (slug)
                {
                    title, // Post title
                    content, // Post content
                    featuredImage, // Featured image URL
                    status, // Post status
                    userId // User ID of the post creator
                }
            );
        } catch (error) {
            // Log any errors that occur during the process
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    // Method to update an existing post
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            // Attempt to update a document in the database with the provided data
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId, // Database ID from configuration
                conf.appwriteCollectionId, // Collection ID from configuration
                slug, // Document ID (slug)
                {
                    title, // Updated post title
                    content, // Updated post content
                    featuredImage, // Updated featured image URL
                    status // Updated post status
                }
            );
        } catch (error) {
            // Log any errors that occur during the process
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }

    // Method to delete a post
    async deletePost(slug) {
        try {
            // Attempt to delete a document from the database using the provided slug
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId, // Database ID from configuration
                conf.appwriteCollectionId, // Collection ID from configuration
                slug // Document ID (slug)
            );
            return true; // Return true if the document is successfully deleted
        } catch (error) {
            // Log any errors that occur during the process
            console.log("Appwrite service :: deletePost :: error", error);
            return false; // Return false if an error occurs
        }
    }

    // Method to get a specific post
    async getPost(slug) {
        try {
            // Attempt to get a document from the database using the provided slug
            return await this.databases.getDocument(
                conf.appwriteDatabaseId, // Database ID from configuration
                conf.appwriteCollectionId, // Collection ID from configuration
                slug // Document ID (slug)
            );
        } catch (error) {
            // Log any errors that occur during the process
            console.log("Appwrite service :: getPost :: error", error);
            return false; // Return false if an error occurs
        }
    }

    // Method to get all posts with optional queries
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            // Attempt to list documents from the database using the provided queries
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId, // Database ID from configuration
                conf.appwriteCollectionId, // Collection ID from configuration
                queries // Queries to filter the documents
            );
        } catch (error) {
            // Log any errors that occur during the process
            console.log("Appwrite service :: getPosts :: error", error);
            return false; // Return false if an error occurs
        }
    }

    // Method to upload a file
    async uploadFile(file) {
        try {
            // Attempt to create a file in the bucket using the provided file
            return await this.bucket.createFile(
                conf.appwriteBucketId, // Bucket ID from configuration
                ID.unique(), // Generate a unique ID for the file
                file // File to be uploaded
            );
        } catch (error) {
            // Log any errors that occur during the process
            console.log("Appwrite service :: uploadFile :: error", error);
            return false; // Return false if an error occurs
        }
    }

    // Method to delete a file
    async deleteFile(fileId) {
        try {
            // Attempt to delete a file from the bucket using the provided file ID
            await this.bucket.deleteFile(
                conf.appwriteBucketId, // Bucket ID from configuration
                fileId // ID of the file to be deleted
            );
            return true; // Return true if the file is successfully deleted
        } catch (error) {
            // Log any errors that occur during the process
            console.log("Appwrite service :: deleteFile :: error", error);
            return false; // Return false if an error occurs
        }
    }

    // Method to get a file preview
    getFilePreview(fileId) {
        // Get a file preview from the bucket using the provided file ID
        return this.bucket.getFilePreview(
            conf.appwriteBucketId, // Bucket ID from configuration
            fileId // ID of the file to get a preview of
        );
    }
}

// Create an instance of the Service class
const service = new Service();
// Export the service instance as the default export
export default service;