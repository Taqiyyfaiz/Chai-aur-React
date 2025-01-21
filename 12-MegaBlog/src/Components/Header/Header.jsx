// Import React library
import React from 'react'

// Import necessary components from the index file
import { Container, Logo, LogoutBtn } from '../index'

// Import Link component from react-router-dom for navigation
import { Link } from 'react-router-dom'

// Import useSelector hook from react-redux to access the Redux store state
import { useSelector } from 'react-redux'

// Import useNavigate hook from react-router-dom for navigation
import { useNavigate } from 'react-router-dom'

// Define the Header functional component
function Header() {
  // Get the authentication status from the Redux store
  const authStatus = useSelector((state) => state.auth.status)
  
  // Define the navigation items with their names, slugs, and active status based on authentication
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  // Return the JSX for the header
  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' /> {/* Render the Logo component with a width of 70px */}
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => useNavigate()(item.slug)} // Navigate to the item's slug when clicked
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn /> {/* Render the LogoutBtn component if authenticated */}
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

// Export the Header component as the default export
export default Header