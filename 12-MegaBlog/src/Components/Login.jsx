// Import React library and useState hook
import React, { useState } from "react";

// Import Link and useNavigate from react-router-dom for navigation
import { Link, useNavigate } from "react-router-dom";

// Import the login action from the AuthSlice
import { login as authLogin } from "../store/AuthSlice";

// Import Button, Input, and Logo components
import { Button, Input, Logo } from "./index";

// Import useDispatch hook from react-redux to dispatch actions
import { useDispatch } from "react-redux";

// Import authService to handle authentication-related operations
import authService from "../appwrite/Auth";

// Import useForm hook from react-hook-form for form handling
import { useForm } from "react-hook-form";

// Define the Login functional component
function Login() {
  // Get the navigate function from useNavigate hook
  const navigate = useNavigate();
  
  // Get the dispatch function from useDispatch hook
  const dispatch = useDispatch();
  
  // Destructure register and handleSubmit from useForm hook
  const { register, handleSubmit } = useForm();
  
  // Define state for error message using useState hook
  const [error, setError] = useState("");

  // Define the login function to handle login logic
  const login = async (data) => {
    setError(""); // Clear any previous error messages
    try {
      // Attempt to log in using authService
      const session = await authService.login(data);
      if (session) {
        // If login is successful, get the current user data
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData)); // Dispatch the login action with user data
        navigate("/"); // Navigate to the home page
      }
    } catch (error) {
      // If an error occurs, set the error message
      setError(error.message);
    }
  };

  // Return the JSX for the login form
  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" /> {/* Render the Logo component */}
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {/* Display error message if there is an error */}
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        {/* Form for login */}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            {/* Input field for email */}
            {/* Render the Input component for the email field */}
            <Input
              label="Email: " // Label text for the input field
              placeholder="Enter your email" // Placeholder text for the input field
              type="email" // Set the input type to 'email'
              {...register("email", { // Register the input field with react-hook-form
                required: true, // Make the email field required
                validate: { // Add custom validation logic
                  matchPatern: (value) => // Validate the email format using a regular expression
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || // Regular expression to match a valid email address
                    "Email address must be a valid address", // Error message if the email format is invalid
                },
              })}
            />
            {/* Input field for password */}
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            {/* Button to submit the form */}
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Export the Login component as the default export
export default Login;