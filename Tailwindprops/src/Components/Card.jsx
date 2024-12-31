import React from 'react'

function Card({username}) {
  console.log(username);
  
  
  return (
    <div className="w-60 h-60 rounded-xl">
        <img
          src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
          alt="Giphy"
          className="rounded-t-xl"
        />
        <div className="glass py-4 px-5 relative -top-[3.4rem]  rounded-b-xl z-10">
          <h1 className="font-bold  font-mono  text-xl">{username}</h1>
        </div>
      </div>
    
  )
}

export default Card


/**
 * Card.jsx
 * 
 * This file defines the Card component for the React application.
 * 
 * Imports:
 * - React: The React library for building user interfaces.
 * 
 * Props:
 * - username: A string representing the username to be displayed in the card.
 * 
 * JSX:
 * - The component returns a div element styled as a card.
 * - The card contains an image and a div with the username displayed in a heading.
 * 
 * Styling:
 * - The card has a fixed width and height, with rounded corners.
 * - The image is displayed at the top of the card with rounded top corners.
 * - The username is displayed in a div with a glass effect, positioned at the bottom of the card.
 */