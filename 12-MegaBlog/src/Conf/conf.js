// Define a configuration object to store Appwrite-related configuration values
const conf = {
    // Set the Appwrite endpoint URL from environment variables
    appwriteUrl: String(import.meta.env.VITE_APP_APPWRITE_URL),
    // Set the Appwrite project ID from environment variables
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    // Set the Appwrite database ID from environment variables
    appwriteDatabaseId: String(import.meta.env.VITE_APP_DATABASE_ID),
    // Set the Appwrite collection ID from environment variables
    appwriteCollectionId: String(import.meta.env.VITE_APP_COLLECTION_ID),
    // Set the Appwrite bucket ID from environment variables
    appwriteBucketId: String(import.meta.env.VITE_APP_BUCKET_ID),
}

// Export the configuration object as the default export
export default conf