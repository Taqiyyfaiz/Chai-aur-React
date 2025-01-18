// Import configuration and necessary modules from Appwrite SDK
import Conf from '../Conf/config.js';
import { Client, Database, ID, bucket, Query } from "appwrite";

// Define a Service class to interact with Appwrite services
export class Service {
    client = new Client(); // Initialize a new Appwrite client
    database; // Placeholder for the database instance
    bucket; // Placeholder for the bucket instance

    // Constructor to set up the client, database, and bucket
    constructor() {
        this.client
            .setEndpoint(Conf.appwriteUrl) // Set the Appwrite endpoint URL
            .setProject(Conf.appwriteProjectId) // Set the Appwrite project ID
        this.database = new Database(this.client); // Initialize the database with the client
        this.bucket = new bucket(this.client); // Initialize the bucket with the client
    }

    // Method to create a new post
    async createPost(title, slug, content, featuredImage, status, userId) {
        try {
            // Attempt to create a document in the database with the provided data
            return await this.database.createDocument(
                Conf.appwriteDataBaseId, // Database ID from configuration
                Conf.appwriteCollectionId, // Collection ID from configuration
                slug, // Document ID (slug)
                {
                    title, // Post title
                    slug, // Post slug
                    content, // Post content
                    featuredImage, // Featured image URL
                    status, // Post status
                    userId // User ID of the post creator
                }
            )
        } catch (error) {
            // Log any errors that occur during the process
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    // Method to update an existing post
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            // Attempt to update a document in the database with the provided data
            return await this.database.updateDocument(
                Conf.appwriteDataBaseId, // Database ID from configuration
                Conf.appwriteCollectionId, // Collection ID from configuration
                slug, // Document ID (slug)
                {
                    title, // Updated post title
                    content, // Updated post content
                    featuredImage, // Updated featured image URL
                    status // Updated post status
                }
            )
        } catch (error) {
            // Log any errors that occur during the process
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }

    // Method to delete a post
    async deletePost(slug) {
        try {
            // Attempt to delete a document from the database using the provided slug
            await this.database.deleteDocument(
                Conf.appwriteDataBaseId, // Database ID from configuration
                Conf.appwriteCollectionId, // Collection ID from configuration
                slug // Document ID (slug)
            )
            return true // Return true if the document is successfully deleted
        } catch (error) {
            // Log any errors that occur during the process
            console.log("Appwrite service :: deletePost :: error", error);
            return false // Return false if an error occurs
        }
    }

    // Method to get all posts
    async getPosts() {
        try {
            // Attempt to get documents from the database using the provided database ID and collection ID
            return await this.database.getDocuments(
                Conf.appwriteDataBaseId, // Database ID from configuration
                Conf.appwriteCollectionId, // Collection ID from configuration
                slug // Slug parameter (not defined in the provided code)
            )
        } catch (error) {
            // Log any errors that occur during the process
            console.log("Appwrite service :: getPosts :: error", error);
            return false // Return false if an error occurs
        }
    }

    // Method to get a specific post with optional queries
    async getPost(queries = [Query.equal('status', 'active')]) {
        try {
            // Attempt to list documents from the database using the provided database ID, collection ID, and queries
            return await this.database.listDocuments(
                Conf.appwriteDataBaseId, // Database ID from configuration
                Conf.appwriteCollectionId, // Collection ID from configuration
                queries, // Queries to filter the documents
            )
        } catch (error) {
            // Log any errors that occur during the process
            console.log("Appwrite service :: getPost :: error", error);
            return false // Return false if an error occurs
        }
    }

    // Method to upload a file
    async uploadFile(file) {
        try {
            // Attempt to create a file in the bucket using the provided bucket ID and a unique ID for the file
            return await this.bucket.createFile(
                Conf.appwriteBucketId, // Bucket ID from configuration
                ID.unique(), // Generate a unique ID for the file
                file, // File to be uploaded
            )
        } catch (error) {
            // Log any errors that occur during the process
            console.log("Appwrite service :: uploadFile :: error", error);
            return false // Return false if an error occurs
        }
    }

    // Method to delete a file
    async deleteFile(fileId) {
        try {
            // Attempt to delete a file from the bucket using the provided bucket ID and file ID
            return await this.bucket.deleteFile(
                Conf.appwriteBucketId, // Bucket ID from configuration
                fileId // ID of the file to be deleted
            )
            return true // Return true if the file is successfully deleted
        } catch (error) {
            // Log any errors that occur during the process
            console.log("Appwrite service :: deleteFile :: error", error);
            return false // Return false if an error occurs
        }
    }

    // Method to get a file preview
    getfilePreview(fileId) {
        // Get a file preview from the bucket using the provided bucket ID and file ID
        return this.bucket.getFilePreview(
            Conf.appwriteBucketId, // Bucket ID from configuration
            fileId // ID of the file to get a preview of
        )
    }
}

// Create an instance of the Service class
const service = new Service();
export default service; // Export the service instance as the default export