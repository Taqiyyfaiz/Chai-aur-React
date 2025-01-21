/** @type {import('tailwindcss').Config} */
export default {
  optimizeDeps: {
    include: ['appwrite'],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

