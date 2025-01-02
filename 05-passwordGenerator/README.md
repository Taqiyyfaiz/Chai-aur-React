# Password Generator

This project is a simple password generator built with React. It allows users to generate random passwords with customizable length and character options.

## Features

- Generate random passwords
- Customize password length
- Include numbers in the password
- Include special characters in the password
- Copy generated password to clipboard

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd 05-passwordGenerator
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000`.

## Components

### App.jsx

This is the main component of the application. It contains the following state variables and functions:

- `length`: State variable to store the length of the password.
- `NumberAllowed`: State variable to determine if numbers are allowed in the password.
- `CharactersAllowed`: State variable to determine if special characters are allowed in the password.
- `Password`: State variable to store the generated password.
- `passwordref`: Ref to the password input field.
- `PasswordGenerator`: Function to generate the password based on the selected options.
- `copyPasswordTocClipBoard`: Function to copy the generated password to the clipboard.

### UI Elements

- Input field to display the generated password.
- Button to copy the password to the clipboard.
- Range input to select the password length.
- Checkbox to include numbers in the password.
- Checkbox to include special characters in the password.

## License

This project is licensed under the MIT License.
