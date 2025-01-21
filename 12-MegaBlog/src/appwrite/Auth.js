import conf from '../Conf/config'; // Import the configuration file
import { Client, Account, ID } from "appwrite";


export class AuthService { // Create a class called AuthService
    client = new Client(); // Create a new Appwrite client
    account; // Create a new Account object

        // Constructor for the Auth class
    constructor() {
        // Set the endpoint and project ID for the Appwrite client
        this.client
            .setEndpoint(conf.appwriteUrl) // Set the Appwrite API endpoint URL
            .setProject(conf.appwriteProjectId) // Set the Appwrite project ID
        // Initialize the Account object with the configured client
        this.account = new Account(this.client);
    }
    
    // Method to create a new user account
    async createAccount({email, password, name}) {
        try {
            // Create a new user account with a unique ID, email, password, and name
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // If the account creation is successful, call another method (not specified here)
            } else {
                // If the account creation fails, return the userAccount object (which would be null or undefined)
                return userAccount;
            }
        } catch (error) {
            // If there is an error during account creation, throw the error
            throw error;
        }
    }
    
    // Method to log in a user
    async login(email, password) {
        try {
            // Create an email session for the user with the provided email and password
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            // If there is an error during login, throw the error
            throw error;
        }
    }

    // Method to Check weather the Current User is Logedin
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service ::  getCurrentUser :: error", error);
        }
    }

    // Method to logout a user
    async logout() {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service ::  Logout :: error", error); 
        }
    }
}

const authService = new AuthService();

export default authService 