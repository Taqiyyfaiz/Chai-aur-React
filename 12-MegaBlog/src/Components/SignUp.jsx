// Import React library and useState hook
import React, { useState } from "react";

// Import authService to handle authentication-related operations
import authService from "../appwrite/Auth";

// Import Link and useNavigate from react-router-dom for navigation
import { Link, useNavigate } from "react-router-dom";

// Import the login action from the AuthSlice
import { login } from "../store/AuthSlice";

// Import Button, Input, and Logo components
import { Button, Input, Logo } from "./index";

// Import useDispatch hook from react-redux to dispatch actions
import { useDispatch } from "react-redux";

// Import useForm hook from react-hook-form for form handling
import { useForm } from "react-hook-form";

// Define the SignUp functional component
function SignUp() {
  // Get the navigate function from useNavigate hook
  const navigate = useNavigate();
  
  // Define state for error message using useState hook
  const [error, setError] = useState("");
  
  // Get the dispatch function from useDispatch hook
  const dispatch = useDispatch();
  
  // Destructure register and handleSubmit from useForm hook
  const { register, handleSubmit } = useForm();

  // Define the create function to handle account creation logic
  const create = async (data) => {
    setError(""); // Clear any previous error messages
    try {
      // Attempt to create an account using authService
      const userData = await authService.createAccount(data);
      if (userData) {
        // If account creation is successful, get the current user data
        const userData = await authService.getCurrentUser();
      }
      if (userData) dispatch(login(userData)); // Dispatch the login action with user data
      navigate("/"); // Navigate to the home page
    } catch (error) {
      // If an error occurs, set the error message
      setError(error.message);
    }
  };

  // Return the JSX for the sign-up form
  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" /> {/* Render the Logo component */}
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {/* Display error message if there is an error */}
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        {/* Form for sign-up */}
        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            {/* Input field for full name */}
            <Input
              label="Full Name: "
              placeholder="Enter your full name"
              {...register("name", {
                required: true, // Make the full name field required
              })}
            />
            {/* Input field for email */}
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
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
                required: true, // Make the password field required
              })}
            />
            {/* Button to submit the form */}
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Export the SignUp component as the default export
export default SignUp;